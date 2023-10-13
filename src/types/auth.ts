export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface IUser {
  name: string;
  phoneNumber?: string;
  email: string;
  logo: ICloudinaryFile | null;
  _id: string;
}

export interface IBusinessProfile {
  name: string;
  email: string;
  logo: string;
  _id: string;
}

export interface IBusiness {
  name: string;
  email: string;
  logo: ICloudinaryFile | string | null;
  instagram?: string;
  tiktok?: string;
  _id: string;
}

export interface BusinessDetails {
  country: string;
  state: string;
  businessPhoneNumber: string;
  logo: ICloudinaryFile | string | Blob | null;
}

export interface Contact {
  contactRole: "owner" | "employee" | "manager" | string;
  contactName: string;
  contactEmail: string;
  contactNumber: string;
}

export interface Socials {
  tiktok: string;
  instagram: string;
  whatsapp: string;
  facebook: string;
}

export interface ICloudinaryFile {
  access_mode: string;
  api_key: string;
  asset_id: string;
  bytes: number;
  created_at: string;
  etag: string;
  folder: string;
  format: string;
  height: number;
  original_filename: string;
  placeholder: boolean;
  public_id: string;
  resource_type: "image" | "video";
  secure_url: string;
  signature: string;
  tags: [];
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
}
