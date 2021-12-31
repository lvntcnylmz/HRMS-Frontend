import { Resume } from './resume';

export interface School {
  schoolName: string;
  departmenName: string;
  startDate: Date;
  graduationDate: Date;
  resume: Resume;
}
