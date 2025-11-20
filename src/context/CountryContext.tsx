import { getCountries } from "@yusifaliyevpro/countries";
import { createContext, useContext, useEffect, useState } from "react";

type CountryContextType = {
  country: CountryLite | null;
  setCountry: React.Dispatch<React.SetStateAction<CountryLite | null>>;
  countryList: CountryLite[];
  loading: boolean;
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
  const [country, setCountry] = useState<CountryLite | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCountries = async () => {
    if (loading) return;
    try {
      setLoading(true);
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
      setCountryList(countries || []);
      setLoading(false);
    } catch (fetchError) {
      console.log(fetchError);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <CountryContext.Provider
      value={{ country, setCountry, countryList, loading }}
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
