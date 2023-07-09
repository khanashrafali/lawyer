import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../../services/app.service';
import { CartData, CartService } from '../../services/cart.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  addForm!: FormGroup;
  editForm!: FormGroup;
  couponForm!: FormGroup;
  addCustomizationForm!: FormGroup;
  saveUsername: boolean = false;
  getAddData: any;
  expectedDeliveryDate: any;
  InvalidPinCode: any;
  selectedAddress!: string;
  cartData?: Observable<CartData>;
  paymentMethod: any = 'Prepaid';
  isLoading: boolean = false;
  isLoadingCoupon: boolean = false;
  isLoadingCheck: boolean = false;
  customization: string = "";
  AddressId:any;
  couponData:any;
  discPrice:any;
  couponError:any;
  couponId:any;
  getZipCode:any;
  cartValue:any =[];
  chargeData:any =[];
  isDefault: boolean = false;
  couponStatus: boolean = false;
  constructor(
    private cartService: CartService,
    private appService: AppService,
    private fb: FormBuilder,
    private toaster: UiService,
    private router: Router,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.initEditForm();
    this.initCouponForm();
    this.getAddress();
    this.getServiceCharge();
    this.cartService.cartData$.subscribe((rs:any)=>{
      this.cartValue = rs;
    });
    console.log("cardata",this.cartValue)
    this.cartService.storeCartItemToDB();
  }

  getAddress() {
    this.appService
      .getAddress()
      .then((rs) => {
        this.getAddData = rs.data.addressList;
        for (let address of this.getAddData) if (address.isDefault) this.selectedAddress = address._id;
        if (!this.uiService.isBrowser) return;
        setTimeout(() => window.scroll(0, 0), 100);
      })
      .catch((err) => console.log(err));
  }

  getServiceCharge() {
    this.appService
      .getServiceCharge()
      .then((rs) => {
        this.chargeData = rs.data[0];
        // console.log( "charge", this.chargeData)
      })
      .catch((err) => console.log(err));
  }
  paymentMethodType(paymentType: any) {
    this.paymentMethod = paymentType;
  }

  async payWithRazor(id: any, cb: any) {
    const options: any = {
      //client key
      key: 'rzp_live_3syldnph3c2MlB',

      //testing key
      // key: 'rzp_test_96RlA4JYt6Q9HR',

      // amount: 1 * 100, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: 'Manihar', // company name or product name
      description: 'Manihar Payment', // product description
      image: './assets/images/logo.jpeg', // company logo or product image
      order_id: id, // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#0c238a',
      },
    };
    options.handler = async (response: any, error: any) => {
      options.response = response;

      await this.handlePrepaidOrder(response, cb);
      // response.razorpay_order_id: "order_K7BXaw1lo59p1i"
      // response.razorpay_payment_id: "pay_K7BYJtCRTfDKu6"
      // response.razorpay_signature: "447152fde1d5d2e034f4ae0c4b883954d908a3f9ddc1da00f2f510285105f14a"
      console.log(options);
      // call your backend api to verify payment signature & capture transaction
    };
    options.modal.ondismiss = (e: any) => {
      cb(false);
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.', e);
    };

    if (!this.uiService.isBrowser) return;

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  }

  async createRazorPayOrder(data: any) {
    const result: any = await this.appService.generateRPayOrder(data);
    type resData = { status: boolean; payData: any };

    let { status, payData } = await new Promise<resData>((res, rej) => {
      this.payWithRazor(result.data.id, (status: boolean, data: any) => {
        let obj = { status, payData: data };
        if (status) res(obj);
        else rej(obj);
      });
    });

    return { status, payData };
  }

  async createCODOrder(data: any) {
    const res: any = await this.appService.createCODOrder(data);
    this.cartService.clearCart();
    this.router.navigate(['/order-placed'], {
      queryParams: { orderId: res.data.orderId, total: res.data.total },
    });
  }

  async placeOrder() {
    let data = { paymentMethod: this.paymentMethod, shippingAddress: this.selectedAddress, customization:this.customization , coupon: this.couponId ? this.couponId : null};

    try {
      this.isLoading = true;

      if (this.paymentMethod == 'Prepaid') {
        let result = await this.createRazorPayOrder(data);
        if (!result.status) {
          this.uiService.openSnackbar('Payment Failed.');
        } else {
          this.cartService.clearCart();
          this.router.navigate(['/order-placed'], {
            queryParams: { orderId: result.payData.orderId, total: result.payData.total },
          });
        }
      } else {
        await this.createCODOrder(data);
      }
    } catch (error: any) {
      console.log(error);
      if (error.message) this.uiService.openSnackbar(error.message);
    } finally {
      this.isLoading = false;
    }
  }

  async handlePrepaidOrder(response: any, cb: any) {
    try {
      let rs: any = await this.appService.createPrepaidOrder({
        rpay_orderId: response.razorpay_order_id,
        rpay_paymentId: response.razorpay_payment_id,
        rpay_signature: response.razorpay_signature,
        reasonMessage: '',
      });

      cb(true, rs.data);
    } catch (error: any) {
      this.uiService.openSnackbar(error.error.message);
      cb(false, error);
    }
  }

  changeSelectedAddress(addressid: string) {
    this.selectedAddress = addressid;
  }

  initForm() {
    this.addForm = this.fb.group({
      pickup_location: ['Home', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      address_2: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['India'],
      pin_code: ['', [Validators.required]],
      isDefault: [false],
    });
    this.addCustomizationForm =this.fb.group({
      customization:['']
    });
  }

  onSaveUsernameChanged(value: boolean) {
    this.saveUsername = value;
  }

  onSubmit() {
    if(this.addForm.invalid){
      return this.addForm.markAllAsTouched()
    }
    this.isLoading = true;
    // console.log(this.addForm.value);
    this.appService
      .addAddress(this.addForm.value)
      .then((rs: any) => {
        this.toaster.openSnackbar(rs.message);
        let element = document.getElementsByClassName('close')[0];
        (element as HTMLElement).click();
        this.getAddress();
        this.isLoading = false;
      })
      .catch((err) => {
        this.toaster.openSnackbar(err.error.message);
        this.isLoading = false;
      });
  }

  onSubmitCustomization() {
    let element = document.getElementsByClassName('close')[1];
    (element as HTMLElement).click();
    console.log(this.addCustomizationForm.value);
    this.customization = this.addCustomizationForm.value.customization;
  }

  deleteAddress(id:any){
    if(confirm("Are You Sure Want To Delete")){
      this.appService
      .deleteAddress(id)
      .then((rs: any) => {
        this.toaster.openSnackbar(rs.message);
        let element = document.getElementsByClassName('close')[0];
        (element as HTMLElement).click();
        this.getAddress();
        this.isLoading = false;
      })
      .catch((err:any) => {
        this.toaster.openSnackbar(err.error.message);
        this.isLoading = false;
      });
    }
  }


  // Edit Address
  initEditForm() {
    this.editForm = this.fb.group({
      pickup_location: ['Home', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      address_2: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['India'],
      pin_code: ['', [Validators.required]],
      isDefault: [false],
    });
  }
  editAddress(p:any){
    this.AddressId =p._id;
    this.isDefault = p?.isDefault;
    this.editForm.patchValue({
      pickup_location:p.pickup_location ,
      name:p.name ,
      email: p.email,
      phone: p.phone,
      address: p.address,
      address_2: p.address_2,
      city: p.city,
      state: p.state,
      country: p.country,
      pin_code: p.pin_code ,
      isDefault:p.isDefault ,
    })
  }

  onEditSubmit(){
    this.isLoading = true;
    // console.log(this.addForm.value);
    this.appService
      .updateAddress(this.AddressId,this.editForm.value)
      .then((rs: any) => {
        this.toaster.openSnackbar(rs.message);
        let element = document.getElementsByClassName('close')[2];
        (element as HTMLElement).click();
        this.getAddress();
        this.isLoading = false;
      })
      .catch((err) => {
        this.toaster.openSnackbar(err.error.message);
        this.isLoading = false;
      });
  }


  initCouponForm(){
    this.couponForm = this.fb.group({
      couponCode:['',[Validators.required]]
    })
  }

  onCouponSubmit(){
    this.isLoadingCoupon = true;
    // console.log(this.couponForm.value)
    if(this.couponForm.invalid){
      return this.couponForm.markAllAsTouched()
    }
    this.appService.checkCoupon(this.couponForm.value).then((rs:any)=>{
      this.couponData =rs.data;
      this.couponId =rs.data._id
      // console.log(this.couponId)
      if(this.cartValue.total >= this.couponData.minCartAmount && this.cartValue.total <= this.couponData.maxCartAmount){
        this.discPrice = this.cartValue.total * (this.couponData.discountInPercent / 100);
          // console.log("data",this.cartValue.total)
        this.isLoadingCoupon = false;
      }
    },(err)=>{
        this.isLoadingCoupon = false;
    })
    this.couponStatus =true;
    this.couponError ="Please Enter Valid"
  }


  checkAvail(){
    this.isLoadingCheck = true;
    this.InvalidPinCode ='';
    this.expectedDeliveryDate='';
    let pickupPostcode = 251001;
    if(!this.getZipCode){
      return this.toaster.openSnackbar("Please Enter Pincode");
    }
    this.appService.checkAvailability(pickupPostcode,this.getZipCode).then((rs:any)=>{
      // console.log({rs})
      this.expectedDeliveryDate =rs.data.data.available_courier_companies[0].etd;
      this.isLoadingCheck = false;
      // console.log("date",this.expectedDeliveryDate)
    }).catch((err)=>{
      // console.log("err",err)
      this.InvalidPinCode =err.error.data.delivery_postcode[0];
      // console.log("err",this.InvalidPinCode)
      this.isLoadingCheck = false;
    })
    // console.log(this.getZipCode)
  }
}
