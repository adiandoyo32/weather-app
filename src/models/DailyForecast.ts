export default interface DailyForecast {
  Date: string;
  Day: {
    HasPrecipitation: boolean;
    Icon: number;
    IconPhrase: string;
    PrecipitationIntensity: string;
    PrecipitationType: string;
    RainProbability: number;
    
    Wind: {
      Direction: {
        Degrees: number;
        English: string;
        Localized: string;
      };
      Speed: {
        Unit: string;
        UnitType: number;
        Value: number;
      };
    };
  };
  HoursOfSun: number;
  EpochDate: number;
  Night: {
    HasPrecipitation: boolean;
    Icon: number;
    IconPhrase: string;
  };
  RealFeelTemperature: {
    Maximum: {
      Phrase: string;
      Unit: string;
      UnitType: number;
      Value: number;
    };
    Minimum: {
      Phrase: string;
      Unit: string;
      UnitType: number;
      Value: number;
    };
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
