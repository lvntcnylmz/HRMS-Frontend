import { User } from './user';

export interface JobSeeker {
  userId: User;
  firstName: string;
  lastName: string;
  nationalId: string;
  dateOfBirth: string;
  //TODO: add resume ref...
}
