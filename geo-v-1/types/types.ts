export interface Country {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Record<string, Currency>;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    languages: Record<string, string>;
    translations: Record<string, Translation>;
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Flags;
    coatOfArms?: CoatOfArms;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    borders?: string[];
}

interface Name {
    common: string;
    official: string;
    nativeName?: Record<string, NativeName>;
}

interface NativeName {
    official: string;
    common: string;
}

interface Currency {
    name: string;
    symbol: string;
}

interface Idd {
    root: string;
    suffixes: string[];
}

interface Translation {
    official: string;
    common: string;
}

interface Demonyms {
    eng: Demonym;
}

interface Demonym {
    f: string;
    m: string;
}

interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

interface Car {
    signs: string[];
    side: string;
}

interface Flags {
    png: string;
    svg: string;
}

interface CoatOfArms {
    png?: string;
    svg?: string;
}

interface CapitalInfo {
    latlng: number[];
}