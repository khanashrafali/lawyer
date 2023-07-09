// Generated by https://quicktype.io

export interface OrderDetailResponse {
    message:    string;
    data:       OrderDetailResponseData;
    statusCode: number;
    status:     boolean;
}

export interface OrderDetailResponseData {
    order:       Order;
    trackData:   any[];
    SROrderInfo: DataSROrderInfo;
}

export interface DataSROrderInfo {
    data: SROrderInfoData;
}

export interface SROrderInfoData {
    id:                          number;
    channel_id:                  number;
    last_mile_awb:               null;
    channel_name:                string;
    base_channel_code:           string;
    is_international:            number;
    is_document:                 number;
    channel_order_id:            string;
    customer_name:               string;
    customer_email:              string;
    customer_phone:              string;
    customer_address:            string;
    customer_address_2:          null;
    customer_city:               string;
    customer_state:              string;
    customer_pincode:            string;
    customer_country:            string;
    pickup_code:                 string;
    pickup_location:             string;
    pickup_location_id:          number;
    pickup_id:                   string;
    ship_type:                   string;
    courier_mode:                string;
    currency:                    string;
    country_code:                number;
    exchange_rate_usd:           number;
    exchange_rate_inr:           number;
    state_code:                  number;
    payment_status:              string;
    delivery_code:               string;
    total:                       number;
    total_inr:                   number;
    total_usd:                   number;
    net_total:                   string;
    other_charges:               string;
    other_discounts:             string;
    giftwrap_charges:            number;
    expedited:                   number;
    sla:                         string;
    cod:                         number;
    tax:                         number;
    total_kerala_cess:           string;
    discount:                    number;
    status:                      string;
    sub_status:                  null;
    status_code:                 number;
    master_status:               string;
    payment_method:              string;
    purpose_of_shipment:         number;
    channel_created_at:          string;
    created_at:                  string;
    order_date:                  string;
    updated_at:                  string;
    products:                    ProductElement[];
    invoice_no:                  string;
    invoice_date:                string;
    shipments:                   Shipments;
    awb_data:                    AwbData;
    order_insurance:             OrderInsurance;
    return_pickup_data:          string;
    company_logo:                null;
    allow_return:                number;
    is_return:                   number;
    is_incomplete:               number;
    errors:                      any[];
    payment_code:                null;
    coupon_is_visible:           boolean;
    coupons:                     string;
    billing_city:                string;
    billing_name:                string;
    billing_email:               string;
    billing_phone:               string;
    billing_alternate_phone:     string;
    billing_state_name:          string;
    billing_address:             string;
    billing_country_name:        string;
    billing_pincode:             string;
    billing_address_2:           string;
    billing_mobile_country_code: string;
    isd_code:                    string;
    billing_state_id:            string;
    billing_country_id:          string;
    freight_description:         string;
    reseller_name:               string;
    shipping_is_billing:         number;
    company_name:                null;
    shipping_title:              string;
    allow_channel_order_sync:    boolean;
    "uib-tooltip-text":          string;
    api_order_id:                null;
    allow_multiship:             number;
    other_sub_orders:            any[];
    others:                      Others;
    is_order_verified:           number;
    extra_info:                  ExtraInfo;
    dup:                         number;
    is_blackbox_seller:          boolean;
    shipping_method:             string;
    refund_detail:               any[];
    pickup_address:              PickupAddress;
    eway_bill_number:            string;
    eway_bill_url:               string;
    eway_required:               boolean;
    irn_no:                      string;
    engage:                      null;
    seller_can_edit:             boolean;
    seller_can_cancell:          boolean;
    is_post_ship_status:         boolean;
    order_tag:                   string;
    qc_status:                   string;
    qc_reason:                   string;
    qc_image:                    string;
    product_qc:                  any[];
    seller_request:              null;
    change_payment_mode:         boolean;
    etd_date:                    null;
    out_for_delivery_date:       null;
    delivered_date:              null;
    remittance_date:             string;
    remittance_utr:              string;
    remittance_status:           string;
    shipping_bill:               string;
    can_edit_dimension:          boolean;
}

export interface AwbData {
    awb:              string;
    applied_weight:   string;
    charged_weight:   string;
    billed_weight:    string;
    routing_code:     string;
    rto_routing_code: string;
    charges:          Charges;
}

export interface Charges {
    zone:                      string;
    cod_charges:               string;
    applied_weight_amount:     string;
    freight_charges:           string;
    applied_weight:            string;
    charged_weight:            string;
    charged_weight_amount:     string;
    charged_weight_amount_rto: string;
    applied_weight_amount_rto: string;
    service_type_id:           string;
}

export interface ExtraInfo {
    order_type:                       string;
    rto_reason:                       string;
    is_consumer:                      string;
    is_document:                      number;
    order_metadata:                   OrderMetadata;
    rto_pred_enable:                  string;
    rto_reason_code:                  string;
    amazon_dg_status:                 boolean;
    applied_sr_challan:               boolean;
    bluedart_dg_status:               boolean;
    other_courier_dg_status:          boolean;
    insurace_opted_at_order_creation: boolean;
}

export interface OrderMetadata {
    type:             string;
    device:           boolean;
    platform:         string;
    client_ip:        string;
    request_type:     string;
    is_insurance_opt: boolean;
}

export interface OrderInsurance {
    insurance_status: string;
    policy_no:        string;
    claim_enable:     boolean;
}

export interface Others {
    weight:                  number;
    quantity:                number;
    client_id:               null;
    self_ship:               boolean;
    ship_date:               null;
    vendor_id:               null;
    buyer_psid:              null;
    dimensions:              string;
    order_items:             OrderItem[];
    vendor_code:             null;
    company_name:            null;
    invoice_date:            null;
    currency_code:           null;
    package_count:           number;
    reseller_name:           null;
    customer_gstin:          null;
    invoice_amount:          null;
    invoice_number:          null;
    transaction_id:          string;
    eway_bill_number:        string;
    shipping_charges:        string;
    is_order_verified:       number;
    order_verified_at:       string;
    shipping_service_type:   string;
    transaction_date_time:   string;
    packaging_unit_details:  null;
    store_rush_promise_sla:  string;
    billing_alternate_phone: string;
    customer_isd_code:       string;
}

export interface OrderItem {
    sku:           string;
    name:          string;
    units:         number;
    selling_price: number;
}

export interface PickupAddress {
    id:             number;
    pin_code:       string;
    pickup_code:    string;
    name:           string;
    phone:          string;
    phone_verified: number;
    address:        string;
    address_2:      string;
    city:           string;
    state:          string;
    country:        string;
    email:          string;
    lat:            null;
    long:           null;
    new:            number;
}

export interface ProductElement {
    id:                        number;
    order_id:                  number;
    product_id:                number;
    name:                      string;
    sku:                       string;
    description:               null;
    channel_order_product_id:  string;
    channel_sku:               string;
    hsn:                       string;
    model:                     null;
    manufacturer:              null;
    brand:                     null;
    color:                     null;
    size:                      null;
    custom_field:              string;
    custom_field_value:        string;
    custom_field_value_string: string;
    weight:                    number;
    dimensions:                string;
    price:                     number;
    cost:                      number;
    mrp:                       number;
    quantity:                  number;
    returnable_quantity:       number;
    tax:                       number;
    status:                    number;
    net_total:                 number;
    discount:                  number;
    product_options:           any[];
    selling_price:             number;
    tax_percentage:            number;
    discount_including_tax:    number;
    channel_category:          string;
    packaging_material:        string;
    additional_material:       string;
    is_free_product:           string;
}

export interface Shipments {
    id:                   number;
    order_id:             number;
    order_product_id:     null;
    channel_id:           number;
    code:                 string;
    cost:                 string;
    tax:                  string;
    awb:                  null;
    last_mile_awb:        string;
    rto_awb:              string;
    awb_assign_date:      null;
    etd:                  string;
    delivered_date:       string;
    quantity:             number;
    cod_charges:          string;
    number:               null;
    name:                 null;
    order_item_id:        null;
    weight:               number;
    volumetric_weight:    number;
    dimensions:           string;
    comment:              string;
    courier:              string;
    courier_id:           string;
    manifest_id:          string;
    manifest_escalate:    boolean;
    status:               string;
    isd_code:             string;
    created_at:           string;
    updated_at:           string;
    pod:                  null;
    eway_bill_number:     string;
    eway_bill_date:       null;
    length:               number;
    breadth:              number;
    height:               number;
    rto_initiated_date:   string;
    rto_delivered_date:   string;
    shipped_date:         string;
    package_images:       string;
    is_rto:               boolean;
    eway_required:        boolean;
    invoice_link:         string;
    is_darkstore_courier: number;
    courier_custom_rule:  string;
    is_single_shipment:   boolean;
}

export interface Order {
    _id:                string;
    paymentStatus:      string;
    date:               string;
    shippingCharge:     number;
    total:              number;
    quantity:           number;
    reviewAvailable:    boolean;
    deleted:            boolean;
    orderId:            string;
    items:              Item[];
    currentOrderStatus: string;
    orderStatus:        OrderStatus[];
    paymentMethod:      string;
    shippingAddress:    ShippingAddress;
    user:               User;
    rPayOrderId:        string;
    createdAt:          string;
    updatedAt:          string;
    __v:                number;
    SROrderInfo:        OrderSROrderInfo;
    rPayPaymentId:      string;
    rPaySignature:      string;
}

export interface OrderSROrderInfo {
    order_id:                 number;
    shipment_id:              number;
    status:                   string;
    status_code:              number;
    onboarding_completed_now: number;
    awb_code:                 string;
    courier_company_id:       string;
    courier_name:             string;
}

export interface Item {
    qty:     number;
    _id:     string;
    product: ItemProduct;
    variant: VariantVariant;
}

export interface ItemProduct {
    name:            string;
    mainCategories:  any[];
    description:     string;
    images:          Image[];
    status:          boolean;
    subCategories:   any[];
    tags:            any[];
    isApproved:      string;
    date:            string;
    isFeatured:      boolean;
    metaDescription: string;
    rating:          number;
    adminRating:     number;
    reviewsCount:    number;
    viewsCount:      number;
    ratingCount:     number;
    deleted:         boolean;
    _id:             string;
    variants:        VariantElement[];
    category:        string;
    subCategory:     string;
    createdAt:       string;
    updatedAt:       string;
    slug:            string;
    __v:             number;
}

export interface Image {
    xlg:      string;
    lg:       string;
    md:       string;
    sm:       string;
    xs:       string;
    original: string;
}

export interface VariantElement {
    _id:     string;
    variant: VariantVariant;
}

export interface VariantVariant {
    _id:          string;
    quantity:     number;
    sellingPrice: number;
    mrp:          number;
    size:         string;
    color:        string;
    SKU:          string;
    deleted:      boolean;
}

export interface OrderStatus {
    _id:    string;
    status: string;
    date:   string;
    msg:    string;
}

export interface ShippingAddress {
    _id:             string;
    pickup_location: string;
    name:            string;
    email:           string;
    phone:           string;
    address:         string;
    address_2:       string;
    city:            string;
    state:           string;
    country:         string;
    pin_code:        string;
    isDefault:       boolean;
    deleted:         boolean;
    user:            string;
    createdAt:       string;
    updatedAt:       string;
    __v:             number;
}

export interface User {
    _id:  string;
    name: string;
}