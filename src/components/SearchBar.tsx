import { useState, useId } from "react";
import { useCountry } from "../context/CountryContext";

export default function SearchBar() {
  const [text, setText] = useState<string>("");
  const id = useId();
  const { loading, setSearchText } = useCountry();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    setSearchText(event.target.value);
  };

  return (
    <div className="relative md:min-w-md lg:min-w-xl">
      <input
        type="search"
        id={id}
        placeholder="Search for a country..."
        onChange={(e) => handleChange(e)}
        disabled={loading}
        className={`bg-white dark:bg-dark-mode-elements ${
          loading ? "animate-pulse" : ""
        } shadow w-full rounded md:rounded-md py-3 md:py-4 text-light-mode-input dark:text-white focus:outline-1 focus:outline-neutral-400 focus:dark:outline-neutral-500 ${
          text.length > 0 ? "px-5" : "px-15"
        }`}
      />

      {text.length === 0 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-5 text-light-mode-input dark:text-white  absolute top-1/2 -translate-y-1/2 left-5 "
        >
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M338.29 338.29L448 448"
          />
        </svg>
      )}
    </div>
  );
}
