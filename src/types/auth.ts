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
  logo: string;
  _id: string;
}

export interface IBusinessProfile {
  name: string;
  email: string;
  logo: string;
  _id: string;
}

export interface BusinessDetails {
  country: string;
  state: string;
  businessPhoneNumber: string;
  logo: File | string | Blob | null;
}

export interface Contact {
  contactRole: "owner" | "employee" | "manager" | "";
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
