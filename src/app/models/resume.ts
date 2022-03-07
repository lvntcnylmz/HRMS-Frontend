import { JobSeeker } from 'src/app/models/jobSeeker';
import { Contact } from './contact';
import { JobExperience } from './jobExperience';
import { Language } from './language';
import { Photo } from './photo';
import { School } from './school';
import { Skill } from './skill';

export interface Resume {
  id: number;
  coverLetter: string;
  jobSeeker: JobSeeker;
  schools: School[];
  jobExperience: JobExperience[];
  languages: Language[];
  skills: Skill[];
  photos: Photo[];
  contacts: Contact[];
}
