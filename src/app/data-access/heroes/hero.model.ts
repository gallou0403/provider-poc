export interface Hero {
  id: number;
  name: string;
  status: HeroStatus;
}

export enum HeroStatus {
  Active = 'active',
  Retired = 'retired',
  Deceased = 'deceased'
}

export const HERO_STATUSES = [
  HeroStatus.Active,
  HeroStatus.Retired,
  HeroStatus.Deceased,
];

export const HERO_STATUS_LABEL = {
  [HeroStatus.Active]: 'Active',
  [HeroStatus.Retired]: 'Retired',
  [HeroStatus.Deceased]: 'Deceased',
}
