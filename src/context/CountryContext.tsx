import { getCountries } from "@yusifaliyevpro/countries";
import { createContext, useContext, useEffect, useState } from "react";

type CountryContextType = {
  country: CountryLite | null;
  setCountry: React.Dispatch<React.SetStateAction<CountryLite | null>>;
  countryList: CountryLite[];
  filteredCountryList: CountryLite[];
  loading: boolean;
  error: boolean;
  filterCountriesByRegion: (
    region: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania" | null
  ) => void;
  retryFetch: () => void;
};

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

const CountryContext = createContext<CountryContextType | undefined>(undefined);

const CountryProvider = ({ children }: { children: React.ReactNode }) => {
  const [countryList, setCountryList] = useState<CountryLite[]>([]);
  const [filteredCountryList, setFilteredCountryList] = useState<CountryLite[]>(
    []
  );
  const [country, setCountry] = useState<CountryLite | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const fetchCountries = async () => {
    if (loading) return;
    try {
      setLoading(true);
      setFilteredCountryList([]);

      const cachedCountries = loadCountriesFromCache();
      if (cachedCountries) {
        setCountryList(cachedCountries);
        setLoading(false);
        setError(false);
        return;
      }

      const countries: CountryLite[] | null = await getCountries({
        fields: [
          "name",
          "flags",
          "languages",
          "region",
          "population",
          "tld",
          "capital",
          "currencies",
          "borders",
          "subregion",
        ],
      });
      if (!countries) {
        setError(true);
        setLoading(false);
        throw new Error("Failed to fetch countries");
      }

      localStorage.setItem("countries", JSON.stringify(countries));

      setError(false);
      setCountryList(countries || []);
      setLoading(false);
    } catch (fetchError) {
      console.log(fetchError);
      setLoading(false);
    }
  };

  const loadCountriesFromCache = (): CountryLite[] | null => {
    const cachedCountries = localStorage.getItem("countries");
    if (!cachedCountries) return null;
    return JSON.parse(cachedCountries) as CountryLite[];
  };

  const filterCountriesByRegion = (
    region: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania" | null
  ) => {
    if (region === null) {
      setFilteredCountryList([]);
      return;
    }

    const filtered = countryList.filter((country) => country.region === region);
    setFilteredCountryList(filtered);
  };

  const retryFetch = () => {
    setError(false);
    fetchCountries();
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <CountryContext.Provider
      value={{
        country,
        setCountry,
        countryList,
        loading,
        error,
        filteredCountryList,
        filterCountriesByRegion,
        retryFetch,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export function useCountry() {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return context;
}

export default CountryProvider;
