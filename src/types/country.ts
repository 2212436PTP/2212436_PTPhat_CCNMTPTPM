export interface CountryName {
  common: string;
  official: string;
}

export interface CountryFlag {
  png?: string;
  svg?: string;
  alt?: string;
}

export interface CountryCurrency {
  name: string;
  symbol?: string;
}

export interface CountryListItem {
  cca3: string;
  name: CountryName;
  flags: CountryFlag;
  region: string;
  population: number;
  capital?: string[];
}

export interface CountryDetail extends CountryListItem {
  subregion?: string;
  area?: number;
  languages?: Record<string, string>;
  currencies?: Record<string, CountryCurrency>;
  timezones?: string[];
  continents?: string[];
  maps?: {
    googleMaps?: string;
    openStreetMaps?: string;
  };
  startOfWeek?: string;
  independent?: boolean;
  landlocked?: boolean;
  unMember?: boolean;
}
