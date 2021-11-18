import { JobPosition } from './jobPosition';
import { Employer } from './employer';

export interface JobAdvertisement {
  jobId: number;
  companyName: string;
  jobTitle: string;
  jobStatus: boolean;
  numberOfOpenPositions: number;
}
