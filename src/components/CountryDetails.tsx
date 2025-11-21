import { useCountry } from "../context/CountryContext";
import countryCodes from "../data/countryCodes.json";

export default function CountryDetails() {
  const { country, setCountry, countryList } = useCountry();

  const getCountryNameByCode = (code: string): string => {
    const country = countryCodes.find((c) => c.code === code);
    return country ? country.name : code;
  };

  const formattedPopulation = (rawPopulation: number): string => {
    return new Intl.NumberFormat("en-US").format(rawPopulation);
  };

  const setCountryByCommonName = (commonName: string) => {
    const country = countryList.find((c) => c.name.common === commonName);
    if (!country) return;
    setCountry(country);
  };

  if (!country) return null;

  return (
    <div className="px-5 my-10 max-w-[1440px] mx-auto font-nunito-sans">
      <button
        onClick={() => setCountry(null)}
        className="flex gap-2 items-center bg-white dark:bg-dark-mode-elements dark:text-white shadow-md px-9 py-2 rounded-md hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12l14 0" />
          <path d="M5 12l4 4" />
          <path d="M5 12l4 -4" />
        </svg>
        <span>Back</span>
      </button>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 mt-18 md:gap-10 lg:gap-25">
        <div className="flex flex-col justify-center">
          <img
            src={country.flags.svg}
            alt={country.name.common}
            className="aspect-video w-full"
          />
        </div>
        <div className="dark:text-white flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            {country.name.common}
          </h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mt-6 md:mt-8">
            <ul className="flex flex-col gap-2">
              <li className="font-light">
                <span className="font-bold">Native name: </span>
                {country.name.nativeName
                  ? Object.values(country.name.nativeName)[0].common
                  : country.name.common}
              </li>
              <li className="font-light">
                <span className="font-bold">Population: </span>
                {formattedPopulation(country.population || 0)}
              </li>
              <li className="font-light">
                <span className="font-bold">Region: </span>
                {country.region}
              </li>
              <li className="font-light">
                <span className="font-bold">Sub Region: </span>
                {country.subregion || "N/A"}
              </li>
              <li className="font-light">
                <span className="font-bold">Capital: </span>
                {country.capital ? country.capital.join(", ") : "N/A"}
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="font-light">
                <span className="font-bold">Top Level Domain: </span>
                {country.tld ? country.tld.join(", ") : "N/A"}
              </li>
              <li className="font-light">
                <span className="font-bold">Currencies: </span>
                {country.currencies
                  ? Object.values(country.currencies)
                      .map((c) => c.name)
                      .join(", ")
                  : "N/A"}
              </li>
              <li className="font-light">
                <span className="font-bold">Languajes: </span>
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:flex-row gap-2  mt-10">
            <h2 className="text-lg font-semibold whitespace-nowrap">
              Border Countries:
            </h2>
            <div className="flex flex-wrap gap-2">
              {country.borders && country.borders.length > 0
                ? country.borders.map((border) => (
                    <button
                      key={border}
                      onClick={() =>
                        setCountryByCommonName(getCountryNameByCode(border))
                      }
                      className="bg-white dark:bg-dark-mode-elements px-6 py-0.5 rounded shadow"
                    >
                      {getCountryNameByCode(border)}
                    </button>
                  ))
                : "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
