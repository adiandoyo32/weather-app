export default interface Location {
  AdministrativeArea: {
    LocalizedName: string;
    LocalizedType: string;
  };
  Country: {
    EnglishName: string;
    ID: string;
    LocalizedName: string;
  };
  EnglishName: string;
  GeoPosition: {
    Latitude: number;
    Longitude: number;
  };
  Key: string;
  LocalizedName: string;
  ParentCity: {
    EnglishName: string;
    Key: string;
    LocalizedName: string;
  };
  Timezone: {
    Code: string;
    GmtOffset: number;
    IsDaylightSaving: boolean;
    Name: string;
    NextOffsetChange: any | null;
  };
}
