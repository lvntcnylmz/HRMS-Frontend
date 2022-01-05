export interface JobAdvertisement {
  jobId: number;
  employerName: string;
  jobTitle: string;
  jobStatus: boolean;
  numberOfOpenPosition: number;
  cityName: string;
  applicationDeadline: Date;
  description: string;
  minSalary: number;
  maxSalary: number;
}
