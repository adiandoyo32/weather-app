export default interface DailyForecast {
  Date: string;
  Day: {
    HasPrecipitation: boolean;
    Icon: number;
    IconPhrase: string;
    PrecipitationIntensity: string;
    PrecipitationType: string;
  };
  EpochDate: number;
  Night: {
    HasPrecipitation: boolean;
    Icon: number;
    IconPhrase: string;
  };
  Temperature: {
    Maximum: {
      Unit: string;
      UnitType: number;
      Value: number;
    };
    Minimum: {
      Unit: string;
      UnitType: number;
      Value: number;
    };
  };
}
