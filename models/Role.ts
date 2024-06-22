import type { Job, JobImage } from "./Job";

export type Role = {
  slug: string;
  name: string;
  order: number;
  jobs: Job[];
  description: string;
  nameSingular: string;
  color: string;
};

export type RoleImage = {
  slug: string;
  icon: string;
  icon_white: string;
  jobs: JobImage[];
};
