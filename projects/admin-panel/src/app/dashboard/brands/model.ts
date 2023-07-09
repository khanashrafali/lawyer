import { Category, Image } from '../../models/apis.models';

export interface Brand {
  brandName: string;
  image: Image;
  isApproved: boolean;
  date: string;
  deleted: boolean;
  _id: string;
  categories: Category[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
