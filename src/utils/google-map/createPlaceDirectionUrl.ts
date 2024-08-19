type Args = {
  origin: {
    latitude: number;
    longitude: number;
  };
  destination: {
    name: string;
    placeId: string;
  };
};

export const createPlaceDirectionUrl = ({ destination, origin }: Args) => {
  const encodedOrigin = encodeURIComponent(`${origin.latitude},${origin.longitude}`);
  const encodedDestination = encodeURIComponent(destination.name);
  return `https://www.google.com/maps/dir/?api=1&origin=${encodedOrigin}&destination=${encodedDestination}&destination_place_id=${destination.placeId}`;
};
