import { useCountry } from "../context/CountryContext";

type CountryLite = {
  name: {
    common: string;
    official: string;
    nativeName?: Record<
      string,
      {
        official: string;
        common: string;
      }
    >;
  };
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  languages?: Record<string, string>;
  region: string;
  subregion?: string;
  population: number;
  capital?: string[];
  tld?: string[];
  currencies?: Record<
    string,
    {
      name: string;
      symbol: string;
    }
  >;
  borders?: string[];
};

export default function Flag({ country }: { country?: CountryLite }) {
  const { setCountry } = useCountry();

  const formattedPopulation = (rawPopulation: number): string => {
    return new Intl.NumberFormat("en-US").format(rawPopulation);
  };

  return (
    <ul>
      <button
        onClick={() => setCountry(country ? country : null)}
        className="rounded-lg overflow-hidden bg-white dark:bg-dark-mode-elements shadow-md transition-transform hover:-translate-y-0.5 cursor-pointer"
      >
        <div className="aspect-video w-full">
          {country ? (
            <img
              src={country.flags.png}
              alt={country.name.common}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
          )}
        </div>

        <div className="p-4 md:p-5 lg:p-7 flex flex-col text-left">
          <h2 className="font-bold font-nunito-sans dark:text-white min-h-6 ">
            {country && country.name.common}
          </h2>
          <ul className="flex flex-col gap-1 mt-3">
            <li className="dark:text-white text-sm min-h-5">
              {country && (
                <>
                  <span className="font-semibold">Population: </span>
                  {formattedPopulation(country.population)}
                </>
              )}
            </li>
            <li className="dark:text-white text-sm min-h-5">
              {country && (
                <>
                  <span className="font-semibold">Region: </span>
                  {country.region}
                </>
              )}
            </li>
            <li className="dark:text-white text-sm min-h-5">
              {country && (
                <>
                  <span className="font-semibold">Capital: </span>
                  {country.capital}
                </>
              )}
            </li>
          </ul>
        </div>
      </button>
    </ul>
  );
}
