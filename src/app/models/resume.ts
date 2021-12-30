import { JobSeeker } from './jobSeeker';
export interface Resume {
  id: number;
  coverLetter: string;
  jobSeeker: JobSeeker;
  // schools:School[];
  // jobExperience:JobExperience[];
  // languages:Languages[];
  // skills:Skills[];
  // photos:Photos[];
  // contacts:Contacts[];
}
