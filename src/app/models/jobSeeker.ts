import { User } from './user';

export interface JobSeeker extends User {
  firstName: string;
  lastName: string;
  nationalId: string;
  dateOfBirth: number;
  email: string;
}
