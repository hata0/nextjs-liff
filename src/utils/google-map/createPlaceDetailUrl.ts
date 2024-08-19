type Args = {
  name: string;
  placeId: string;
};

export const createPlaceDetailUrl = ({ name, placeId }: Args) => {
  const encodedQuery = encodeURIComponent(name);
  return `https://www.google.com/maps/search/?api=1&query=${encodedQuery}&query_place_id=${placeId}`;
};
