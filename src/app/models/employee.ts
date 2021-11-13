import { User } from './user';

export interface Employee extends User {
  firstName: string;
  lastName: string;
}
