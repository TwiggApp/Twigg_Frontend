import { ICloudinaryFile } from "./auth";

export interface IMenu {
  name: string;
  description?: string;
  categories?: number;
  items?: number;
  date?: Date;
}

export interface ICategory {
  _id?: string;
  name: string;
  items?: number;
  image?: ICloudinaryFile | string;
}

export interface IFood {
  name: string;
  price: string;
  image?: ICloudinaryFile | string;
}
