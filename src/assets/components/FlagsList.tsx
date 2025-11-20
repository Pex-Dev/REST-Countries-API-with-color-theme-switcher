import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";
import { useCountry } from "../context/CountryContext";
import Flag from "./Flag";

export default function Flags() {
  const { countryList, loading } = useCountry();
  return (
    <div className="px-5 my-10 max-w-[1440px] mx-auto">
      <header className="flex flex-col gap-10 md:flex-row md:justify-between">
        <SearchBar />
        <FilterButton />
      </header>
      {loading ? (
        <ul className="grid grid-cols-1 px-6 md:px-0 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-18 mt-10">
          {Array.from({ length: 30 }).map((_, index) => (
            <Flag key={index} />
          ))}
        </ul>
      ) : (
        <ul className="grid grid-cols-1 px-6 md:px-0 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-18 mt-10">
          {countryList.map((country) => (
            <Flag key={country.name.official} country={country} />
          ))}
        </ul>
      )}
    </div>
  );
}
