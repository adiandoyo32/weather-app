import { Box } from '@chakra-ui/react'
import ForecastInformation from '../models/ForecastInformation';
import { dateIsoToDate } from '../utils/date-utils';

interface ForecastCardProps {
  forecast: ForecastInformation | null;
}

const ForecastCard: React.FC<ForecastCardProps> = ({forecast}) => {
  return (
    <Box mt="6" borderWidth="1px" p="8" borderRadius="lg">
        {
          forecast?.DailyForecasts.map((forecast, index) => {
            return (
              <div key={index}>{dateIsoToDate(forecast.Date)}</div>
            )
          })
        }
    </Box>
  )
}

export default ForecastCard