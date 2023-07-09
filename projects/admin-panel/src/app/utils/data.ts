import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ApprovalStatus } from '../models/apis.models';

export const dashboardCards = (moduleCount: any) => [
  {
    title: 'Categories',
    routerLink: '/categories',
    textClass: 'text-primary',
    borderClass: 'border-primary',
    progressClass: 'bg-primary',
    icon: 'fe fe-feather',
    count: moduleCount.categoriesCount || 0,
  },
  // {
  //   title: "Collections",
  //   routerLink: "/collections",
  //   textClass: "text-success",
  //   borderClass: "border-success",
  //   progressClass: "bg-success",
  //   icon: "fe fe-folder",
  //   count: moduleCount.collectionsCount || 0,
  // },

  {
    title: 'Products',
    routerLink: '/products',
    textClass: 'text-danger',
    borderClass: 'border-danger',
    progressClass: 'bg-danger',
    icon: 'fe fe-magic',
    count: moduleCount.productsCount || 0,
  },

  // {
  //   title: "Coupons",
  //   routerLink: "/coupons",
  //   textClass: "text-warning",
  //   borderClass: "border-warning",
  //   progressClass: "bg-warning",
  //   icon: "fe fe-line-chart",
  //   count: moduleCount.couponsCount || 0,
  // },

  {
    title: 'Users',
    routerLink: '/users',
    textClass: 'text-info',
    borderClass: 'border-info',
    progressClass: 'bg-info',
    icon: 'fe fe-users',
    count: moduleCount.usersCount || 0,
  },
  {
    title: 'Orders',
    routerLink: '/orders',
    textClass: 'text-success',
    borderClass: 'border-success',
    progressClass: 'bg-success',
    icon: 'fe fe-money',
    count: moduleCount.totalOrderCount || 0,
  },
  // {
  //   title: "Vendors",
  //   routerLink: "/vendors",
  //   textClass: "text-secondrey",
  //   borderClass: "border-secondrey",
  //   progressClass: "bg-secondrey",
  //   icon: "fe fe-users",
  //   count: moduleCount.vendorsCount || 0,
  // },
  // {
  //   title: "Balance",
  //   routerLink: "/transaction",
  //   textClass: "text-primary",
  //   borderClass: "border-primary",
  //   progressClass: "bg-primary",
  //   icon: "fe fe-money",
  //   count: moduleCount.balance || 0,
  // },
];

export const BEGINNING = ['Summer', 'Winter'];

export const DEADLINE = {
  Summer: ['Before October', 'Before November'],
  Winter: ['Before March', 'Before May'],
};

export const COURSE_TYPE = ['Master’s', 'Bachelor’s', 'PHD', 'Short course', 'Study Online'];

export const DATE = 'YYYY-MM-DD';

export const IMAGE_MIME_TYPES = ['image/png', 'image/jpeg', 'image/gif'];

export const VIDEO_MIME_TYPES = ['video/mp4'];

export const editorConfig = (editable = true, height: string = '200px'): AngularEditorConfig => {
  return {
    editable: editable,
    spellcheck: true,
    height: height,
    minHeight: height,
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    // uploadUrl: "v1/image",
    // upload: (file: File) => { ... }
    // uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize', 'insertImage', 'insertVideo'],
    ],
  };
};

export const PRODUCT_TYPES = ['Regular', 'Customized'];
export const APPROVAL_STATUS = [ApprovalStatus.PENDING, ApprovalStatus.APPROVED, ApprovalStatus.DISAPPROVED];

export const IMAGE_ERROR_MSG = 'Uploaded file is not a valid image. Only JPG, PNG and GIF files are allowed.';

export const VIDEO_ERROR_MSG = 'Uploaded file is not a valid video. Only mp4 files are allowed.';
