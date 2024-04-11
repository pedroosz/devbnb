import { IRental, IRentalCountry } from "../../@types/rental";
import randomIntFromInterval from "../../utils/getRandomInt";

class RentalService {
  getAvailableRentals() {
    const top50CountriesByGdp = this.getAvailableCountries();
    const rentals: IRental[] = Array.from({ length: 50 }).map((_, index) => ({
      id: index + 1,
      rating: Number((Math.random() * 5).toFixed(1)),
      square_meters: randomIntFromInterval(50, 400),
      distance: Number((Math.random() * 150).toFixed(1)),
      price_per_night: Math.floor(Math.random() * 200) + 50,
      city: `City ${index + 1}`,
      country:
        top50CountriesByGdp[
          randomIntFromInterval(0, top50CountriesByGdp.length - 1)
        ],
    }));

    return rentals;
  }

  getAvailableCountries() {
    const top50CountriesByGdp: IRentalCountry[] = [
      { name: "United States", acronym: "US" },
      { name: "China", acronym: "CN" },
      { name: "Japan", acronym: "JP" },
      { name: "Germany", acronym: "DE" },
      { name: "India", acronym: "IN" },
      { name: "United Kingdom", acronym: "GB" },
      { name: "France", acronym: "FR" },
      { name: "Italy", acronym: "IT" },
      { name: "Canada", acronym: "CA" },
      { name: "Brazil", acronym: "BR" },
      { name: "Russia", acronym: "RU" },
      { name: "South Korea", acronym: "KR" },
      { name: "Spain", acronym: "ES" },
      { name: "Australia", acronym: "AU" },
      { name: "Indonesia", acronym: "ID" },
      { name: "Mexico", acronym: "MX" },
      { name: "Saudi Arabia", acronym: "SA" },
      { name: "Turkey", acronym: "TR" },
      { name: "Thailand", acronym: "TH" },
      { name: "Nigeria", acronym: "NG" },
      { name: "Netherlands", acronym: "NL" },
      { name: "Iran", acronym: "IR" },
      { name: "Poland", acronym: "PL" },
      { name: "Egypt", acronym: "EG" },
      { name: "Vietnam", acronym: "VN" },
      { name: "Argentina", acronym: "AR" },
      { name: "United Arab Emirates", acronym: "AE" },
      { name: "Philippines", acronym: "PH" },
      { name: "Pakistan", acronym: "PK" },
      { name: "Malaysia", acronym: "MY" },
      { name: "Colombia", acronym: "CO" },
      { name: "South Africa", acronym: "ZA" },
      { name: "Bangladesh", acronym: "BD" },
      { name: "Algeria", acronym: "DZ" },
      { name: "Norway", acronym: "NO" },
      { name: "Iraq", acronym: "IQ" },
      { name: "Israel", acronym: "IL" },
      { name: "Switzerland", acronym: "CH" },
      { name: "Kazakhstan", acronym: "KZ" },
      { name: "Sweden", acronym: "SE" },
      { name: "Venezuela", acronym: "VE" },
      { name: "Nigeria", acronym: "NG" }, // Duplicate entry, might need correction based on specific data source
      { name: "Ireland", acronym: "IE" },
      { name: "Singapore", acronym: "SG" },
      { name: "Chile", acronym: "CL" },
    ];

    return top50CountriesByGdp;
  }
}

const rentalService = new RentalService();

export default rentalService;
