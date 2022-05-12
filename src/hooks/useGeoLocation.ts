import { useEffect, useState } from "react";

interface IGeoLocation {
  loaded: boolean;
  coords?: {
    latitude: number;
    longitude: number;
  };
  error?: {
    code: number;
    message: string;
  };
}

const useGeoLocation = () => {
  const [getLocation, setGeoLocation] = useState<IGeoLocation>({
    loaded: false,
  });

  const onSuccess = (location: GeolocationPosition) => {
    setGeoLocation({
      loaded: true,
      coords: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    });
  };

  const onError = (error: GeolocationPositionError) => {
    setGeoLocation({
      loaded: true,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
        PERMISSION_DENIED: 0,
        POSITION_UNAVAILABLE: 0,
        TIMEOUT: 0,
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return getLocation;
};

export default useGeoLocation;
