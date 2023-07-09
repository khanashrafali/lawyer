import { Brand } from "../dashboard/brands/model";

export interface ApiResponse {
  data: any;
  message: string;
  status: boolean;
  statusCode: number;
}

export enum userRole {
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
}

export interface Permission {
  _id: string;
  module: AdminModule;
  read: boolean;
  write: boolean;
  delete: boolean;
}

export enum AdminModule {
  ADMIN = "ADMIN",
  CATEGORY = "CATEGORY",
  CONTENT = "CONTENT",
  FILTER = "FILTER",
  ORDER = "ORDER",
  PAYOUT = "PAYOUT",
  PRICE = "PRICE",
  PRODUCT = "PRODUCT",
  SLIDER = "SLIDER",
  USER = "USER",
  VARIANT = "VARIANT",
  VENDOR = "VENDOR",
}

export const ADMIN_MODULES: AdminModule[] = [
  AdminModule.ADMIN,
  AdminModule.CATEGORY,
  AdminModule.CONTENT,
  AdminModule.FILTER,
  AdminModule.ORDER,
  AdminModule.PAYOUT,
  AdminModule.PRICE,
  AdminModule.PRODUCT,
  AdminModule.SLIDER,
  AdminModule.USER,
  AdminModule.VARIANT,
  AdminModule.VENDOR,
];

export enum PaymentStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  ERROR = "ERROR",
  PENDING = "PENDING",
}

export enum PaymentMethod {
  PREPAID = "Prepaid",
  COD = "COD",
}

export enum OrderStatus {
  PLACED = "PLACED",
  CANCELLED = "CANCELLED",
  DELIVERED = "DELIVERED",
  PACKED = "PACKED",
  SHIPPED = "SHIPPED",
  RETURNED = "RETURNED",
}

export enum ApprovalStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  DISAPPROVED = "DISAPPROVED",
}

export interface PageData {
  count: number;
  docs: any[];
}

export interface PaginationData {
  rows: any[];
  totalCount: number;
  hasPrev2: true;
  hasPrev: true;
  isCurrentPage: true;
  hasNext: true;
  hasNext2: true;
}

export interface AuthData {
  email: string;
  name: string;
  id: string;
  mobileNumber: string;
  token: string;
  role: string;
  adminRole: {
    deleted: false;
    _id: string;
    roleName: userRole;
    permissions: Permission[];
    createdAt: string;
    updatedAt: string;
  };
}

export interface Variant {
  _id: string;
  variant: {
    badalDaloPrice: number;
    SKU: string;
    mrp: number;
    sellingPrice: number;
    quantity: number;
    size: string;
    color: string;
  };
}

export interface RoleData {
  deleted: boolean;
  _id: string;
  roleName: string;
  permissions: Permission[];
  createdAt: string;
  updatedAt: string;
}

export interface VendorData {
  _id: string;
  avatar: string;
  address: { street: string; pinCode: string; city: string; state: string };
  email: string;
  mobileNumber: string;
  isApproved: string;
  businessType: string;
  isActive: boolean;
  isProfileComplete: boolean;
  gstNumber: string;
  panNumber: string;
  addressProof: string[];
  date: string;
  commissionPercent: number;
  isMobileVerified: boolean;
  isEmailVerified: boolean;
  deleted: boolean;
  name: string;
  brandLogo: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductImage {
  lg: string;
  md: string;
  original: string;
  sm: string;
  xlg: string;
  xs: string;
}

export interface Product {
  name: string;
  description: string;
  images: ProductImage[];
  sku: string;
  GST: number;
  fabricInformation: string;
  washCareInfo: string;
  leadTime: string;
  price: number;
  totalQuantityAvailable: number;
  sizesAvailable: string[];
  colorsAvailable: string[];
  status: boolean;
  deleted: false;
  _id: string;
  brand: Brand;
  categories: Category[];
  variantOptions: any[];
  variants: Variant[];
  vendor?: VendorData;
  isApproved: string;
  quantityDependent: boolean;
  metaDescription: string;
  rating: number;
  ratingCount: number;
  isFeatured: boolean;
  createdBy: string;
  date: Date;
  createdAt: string;
  updatedAt: string;
  __v: number;
  category: Category;
  adminRating?: number;
  subCategories: Category[];
  subCategory: Category;
  tags: string[];
  mainCategories: Category[];
}
export interface Collection {
  conditions: {
    _id: string;
    field: string;
    condition: string;
    value: string;
  }[];
  createdAt: Date;
  createdBy: string;
  deleted: boolean;
  description: string;
  chartImage: string;
  image: string;
  mustMatchAll: boolean;
  title: string;
  status: boolean;
  type: "MANUAL" | "AUTOMATED";
  updatedAt: Date;
  date: Date;
  isFeatured: boolean;
  __v: number;
  _id: string;
}

export interface User {
  avatar: string;
  email: string;
  mobileNumber: string;
  isActive: boolean;
  isMobileVerified: boolean;
  isEmailVerified: boolean;
  date: string;
  deleted: boolean;
  _id: string;
  varificationToken: string;
  expirationTime: Date;
  createdAt: string;
  updatedAt: string;
  blockDate?: Date;
  verificationType?: string;
  orderCount?: number;
  dob: string;
}

export interface Slide {
  title: string;
  desc: string;
  image: any;
  isImg: boolean;
  product: Product;
  redirectUrl: string;
  _id: string;
}

export interface Slider {
  [x: string]: any;
  _id: string;
  longSlider: { slides: Slide[] };
  shortSlider: { slides: Slide[] };
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  _id: string;
  item: Product;
  quantity: number;
  variant: {
    price: number;
    comparePrice: number;
    costPrice: number;
    quantity: number;
    SKU: string;
    deleted: boolean;
    _id: string;
  };
  orderStatus: {
    ORDERED: { status: boolean; date: string };
    PACKED: { status: boolean; date: string };
    SHIPPED: { status: boolean; date: string };
    DELIVERED: { status: boolean; date: string };
    CANCELLED: { status: boolean; date: string };
    RETURENED: { status: boolean; date: string };
  };
}

export interface OrderAddress {
  name: string;
  email: string;
  mobileNumber: string;
  address: string;
  landmark: string;
  houseNumber: string;
  city: string;
  pinCode: string;
  state: string;
  date: Date;
}

export interface OrderVariant {
  _id: string;
  badalDaloPrice: number;
  SKU: string;
  mrp: number;
  sellingPrice: number;
  quantity: number;
}

export interface Order {
  _id: string;
  paymentStatus: PaymentStatus;
  isValidSignature: boolean;
  date: string;
  shippingCharge: number;
  currentOrderStatus: OrderStatus;
  total: number;
  quantity: number;
  deleted: false;
  orderId: string;
  product: Product;
  variant: OrderVariant;
  vendor?: Vendor;
  orderStatus: { _id: string; status: OrderStatus; date: string; msg: string }[];
  paymentMethod: PaymentMethod;
  shippingAddress: Address;
  user: User;
  paymentRecivedAt: string;
  createdAt: string;
  updatedAt: string;
  rPayOrderId: String;
  rPayPaymentId: String;
  rPaySignature: String;
  reasonMessage: String;
  payoutCompelete: boolean;
  day?: string;
  time?: string;
}

export interface Coupon {
  status: boolean;
  deleted: boolean;
  isPrivate: boolean;
  appliedCount: number;
  discountIn: string;
  discount: number;
  numberOfUsers: number;
  _id: string;
  code: string;
  createBy: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  date: Date;
}

// Generated by https://quicktype.io

export interface IngAddress {
  _id: string;
  name: string;
  mobileNumber: string;
  email: string;
  landmark: string;
  address: string;
  houseNumber: string;
  city: string;
  pinCode: string;
  state: string;
  country: string;
  date: string;
  isDefault: boolean;
  deleted: boolean;
  tag: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AwbData {
  awb: string;
  applied_weight: string;
  charged_weight: string;
  billed_weight: string;
  routing_code: string;
  rto_routing_code: string;
  charges: Charges;
}

export interface Charges {
  zone: string;
  cod_charges: string;
  applied_weight_amount: string;
  freight_charges: string;
  applied_weight: string;
  charged_weight: string;
  charged_weight_amount: string;
  charged_weight_amount_rto: string;
  applied_weight_amount_rto: string;
  service_type_id: string;
}

export interface ExtraInfo {
  order_type: string;
  is_document: number;
  order_metadata: OrderMetadata;
  amazon_dg_status: boolean;
  bluedart_dg_status: boolean;
  other_courier_dg_status: boolean;
}

export interface OrderMetadata {
  type: string;
  device: boolean;
  platform: string;
  client_ip: string;
  request_type: string;
}

export interface OrderInsurance {
  insurance_status: string;
  policy_no: string;
  claim_enable: boolean;
}

export interface Others {
  weight: number;
  quantity: number;
  self_ship: boolean;
  buyer_psid: null;
  dimensions: string;
  billing_city: string;
  billing_name: string;
  company_name: null;
  billing_email: string;
  billing_phone: string;
  billing_state: string;
  currency_code: null;
  package_count: number;
  reseller_name: null;
  customer_gstin: null;
  billing_address: string;
  billing_country: string;
  billing_pincode: string;
  billing_isd_code: string;
  shipping_charges: string;
  billing_address_2: null;
  is_order_verified: number;
  order_verified_at: string;
  billing_alternate_phone: string;
}

export interface Address {
  _id: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  address: string;
  city: string;
  pinCode: string;
  date: string;
  isDefault: true;
  deleted: false;
  user: string;
  createdAt: string;
  updatedAt: string;
}

export interface FluffyProduct {
  id: number;
  order_id: number;
  name: string;
  sku: string;
  channel_order_product_id: string;
  channel_sku: string;
  hsn: string;
  model: null;
  manufacturer: null;
  brand: null;
  color: null;
  size: null;
  custom_field: string;
  custom_field_value: string;
  custom_field_value_string: string;
  weight: number;
  dimensions: string;
  price: number;
  cost: number;
  mrp: number;
  quantity: number;
  tax: number;
  status: number;
  net_total: number;
  discount: number;
  product_options: any[];
  selling_price: number;
  tax_percentage: number;
  discount_including_tax: number;
  channel_category: string;
  packaging_material: string;
  additional_material: string;
  is_free_product: string;
}

export interface Shipments {
  id: number;
  order_id: number;
  order_product_id: null;
  channel_id: number;
  code: string;
  cost: string;
  tax: string;
  awb: null;
  awb_assign_date: null;
  etd: string;
  delivered_date: string;
  quantity: number;
  cod_charges: string;
  number: null;
  name: null;
  order_item_id: null;
  weight: number;
  volumetric_weight: number;
  dimensions: string;
  comment: string;
  courier: string;
  courier_id: string;
  manifest_id: string;
  manifest_escalate: boolean;
  status: string;
  isd_code: string;
  created_at: string;
  updated_at: string;
  pod: null;
  eway_bill_number: string;
  eway_bill_date: null;
  length: number;
  breadth: number;
  height: number;
  rto_initiated_date: string;
  rto_delivered_date: string;
  shipped_date: string;
  package_images: string;
  is_rto: boolean;
  eway_required: boolean;
  invoice_link: string;
}

export interface Item {
  _id: string;
  name: string;
  description: string;
  brand: null;
  images: string[];
  type: string;
  status: boolean;
  quantityDependent: boolean;
  isApproved: string;
  date: string;
  isFeatured: boolean;
  metaDescription: string;
  rating: number;
  ratingCount: number;
  viewCount: number;
  deleted: boolean;
  variantOptions: VariantOption[];
  vendor: Vendor;
  userRole: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  __v: number;
}

export interface VariantOption {
  type: string;
  values: string[];
  _id: string;
}

export interface Vendor {
  _id: string;
  email: string;
  avatar: string;
  mobileNumber: string;
  isApproved: string;
  name: string;
  businessEmail: string;
  businessMobileNumber: string;
  isActive: boolean;
  isProfileComplete: boolean;
  gstNumber: string;
  panNumber: string;
  businessType: string;
  addressProof: string[];
  date: string;
  address: string;
  commissionPercent: number;
  isMobileVerified: boolean;
  isEmailVerified: boolean;
  bankDetails: {
    accountHolderName: string;
    ifscCode: string;
    bankName: string;
    accountNumber: string;
  };
  dob: Date;
  images: string[];
  video: string;
  deleted: boolean;
  brandLogo: string;
  createdAt: string;
  updatedAt: string;
}

export interface Label {
  Size: string;
}

export interface User {
  _id: string;
  name: string;
}

// Generated by https://quicktype.io

export interface PickupLocation {
  id: number;
  pickup_location: string;
  address_type: null;
  address: string;
  address_2: string;
  city: string;
  state: string;
  country: string;
  pin_code: string;
  email: string;
  phone: string;
  name: string;
  company_id: number;
  gstin: null;
  vendor_name: null;
  status: number;
  phone_verified: number;
  lat: string;
  long: string;
  warehouse_code: null;
  alternate_phone: null;
  rto_address_id: null;
  lat_long_status: number;
  new: number;
  associated_rto_address: null;
}

export interface ContentData {
  subTitle: string;
  sortDescription: string;
  description: string;
  deleted: boolean;
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
}

export interface FilterData {
  categories: Category[];
  items: string[];
  status: boolean;
  deleted: boolean;
  _id: string;
  heading: string;
  createdAt: string;
  updatedAt: string;
}

export interface PricesData {
  heading: string;
  key: string;
  date: string;
  deleted: boolean;
  _id: string;
  diffrence: number;
  from: number;
  to: number;
  createdAt: string;
  updatedAt: string;
}

export interface Payout {
  date: string;
  msg: string;
  _id: string;
  order: Order;
  createdAt: string;
  updatedAt: string;
  orderAmount: number;
  payoutAmount: number;
  orderId: string;
  paymentMethod: string;
  vendor: Vendor;
}

export interface Variant {
  categories: Category[];
  deleted: boolean;
  status: boolean;
  updatedAt: string;
  createdAt: string;
  variantDescription: string;
  variantName: string;
  slug: string;
  _id: string;
}

export interface AdminData {
  _id: string;
  email: string;
  date: string;
  name: string;
  createdAt: string;
  isActive: boolean;
  adminRole: RoleData;
}

export interface VariantData {
  status: boolean;
  categories: Category[];
  variantName: string;
  values: string[];
  variantDescription: string;
  deleted: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
}

export interface Feedback {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
}

// Generated by https://quicktype.io

export interface OrderDetail {
  _id: string;
  paymentStatus: string;
  date: string;
  shippingCharge: number;
  total: number;
  quantity: number;
  reviewAvailable: boolean;
  deleted: boolean;
  orderId: string;
  items: OrderProduct[];
  currentOrderStatus: string;
  orderStatus: SingleOrderStatus[];
  paymentMethod: string;
  shippingAddress: ShippingAddress;
  user: User;
  rPayOrderId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  rPayPaymentId: string;
  rPaySignature: string;
}

export interface OrderProduct {
  qty: number;
  _id: string;
  product: Product;
  variant: VariantVariant;
}

export interface VariantElement {
  _id: string;
  variant: VariantVariant;
}

export interface VariantVariant {
  _id: string;
  quantity: number;
  sellingPrice: number;
  mrp: number;
  size: string;
  color: string;
  SKU: string;
  deleted: boolean;
}

export interface SingleOrderStatus {
  _id: string;
  status: string;
  date: string;
  msg: string;
}

export interface ShippingAddress {
  _id: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  address: string;
  state: string;
  city: string;
  pinCode: string;
  date: string;
  isDefault: boolean;
  deleted: boolean;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface User {
  _id: string;
  name: string;
}

export interface Category {
  _id: string;
  sno: number;
  subCategories: Category[];
  collections: any[];
  status: boolean;
  isGender: boolean;
  date: string;
  deleted: boolean;
  name: string;
  level: number;
  image: Image;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  __v: number;
}

export interface Image {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xlg: string;
  original: string;
}
