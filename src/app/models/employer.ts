import { User } from './user';

export interface Employer extends User {
  companyName: string;
  webSite: string;
  phoneNumber: string;
}
