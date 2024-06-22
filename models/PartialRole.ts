import type { PartialJob } from "./PartialJob";

export type PartialRole = {
  slug: string;
  name: string;
  order: number;
  jobs: PartialJob[];
  description: string;
  nameSingular: string;
  color: string;
};
