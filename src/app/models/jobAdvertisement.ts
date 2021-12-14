import { JobPosition } from './jobPosition';
import { Employer } from './employer';

export interface JobAdvertisement {
  jobId: number;
  companyName: string;
  jobTitle: string;
  jobStatus: boolean;
  numberOfOpenPosition: number;
  cityName: string;
  applicationDeadline: Date;
  description: string;
  minSalary: number;
  maxSalary: number;
}
