import { Resume } from './resume';
import { JobPosition } from 'src/app/models/jobPosition';

export interface JobExperience {
  companyName: string;
  jobPosition: JobPosition;
  startDate: Date;
  endDate: Date;
  resume: Resume;
}
