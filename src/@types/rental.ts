export interface IRentalCountry {
  name: string;
  acronym: string;
}

export interface IRental {
  id: number;
  rating: number;
  square_meters: number;
  distance: number;
  price_per_night: number;
  city: string;
  country: IRentalCountry;
}
