import { Box, Stack, Text, Image } from "@chakra-ui/react";
import React from "react";
import { resolveWeatherImage } from "../utils/utils";

interface ForecastDayTimeProps {
  dayTime: string;
  iconType: number;
  iconPhrase: string;
}

export const ForecastDayTime: React.FC<ForecastDayTimeProps> = (props) => {
  return (
    <Stack direction="row" align="center" justify="space-between">
      <Box>
        <Text fontSize="lg" color="gray.500" fontWeight="hairline">
          {props.dayTime}
        </Text>
        <Text mt="1" fontSize="lg" fontWeight="semibold">
          {props.iconPhrase}
        </Text>
      </Box>
      <Image
        width="100%"
        boxSize="80px"
        objectFit="contain"
        src={resolveWeatherImage(props.iconType)}
      />
    </Stack>
  );
};
