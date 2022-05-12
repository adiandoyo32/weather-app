import DailyForecast from "./DailyForecast";

export default interface ForecastInformation {
  DailyForecasts: DailyForecast[];
  Headline: {
    Category: string;
    EffectiveDate: string;
    EffectiveEpochDate: number;
    EndDate: string;
    EndEpochDate: number;
    Link: string;
    MobileLink: string;
    Severity: number;
    Text: string;
  };
}
