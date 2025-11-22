import { useEffect, useRef, useState } from "react";
import { useCountry } from "../context/CountryContext";

export default function FilterButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const filterRef = useRef<HTMLDivElement>(null);
  const { region, setRegion, loading } = useCountry();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={filterRef} className="relative w-fit">
      <button
        disabled={loading}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`bg-white dark:bg-dark-mode-elements ${
          loading
            ? "animate-pulse text-black/20  dark:text-white/20 cursor-default"
            : "text-black  dark:text-white hover:cursor-pointer"
        } px-6 py-3 md:py-4 shadow font-nunito-sans rounded md:rounded-md min-w-[195.61px] flex justify-between items-center gap-5 focus:outline-1 focus:outline-neutral-400 focus:dark:outline-neutral-500 `}
      >
        <span>{region ? region : "Filter by Region"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute bg-white dark:bg-dark-mode-elements mt-2 p-5 w-full shadow rounded md:rounded-md z-10">
          <ul className="flex flex-col gap-1 font-nunito-sans">
            <li>
              <button
                className="cursor-default dark:text-white w-full flex justify-between"
                onClick={() => {
                  setRegion(null);
                  setIsOpen(false);
                }}
              >
                <span>All</span> {region === null ? "✓" : ""}
              </button>
            </li>
            <li>
              <button
                className="cursor-default dark:text-white w-full flex justify-between"
                onClick={() => {
                  setRegion(region === "Africa" ? null : "Africa");
                  setIsOpen(false);
                }}
              >
                <span>Africa</span> {region === "Africa" ? "✓" : ""}
              </button>
            </li>
            <li>
              <button
                className="cursor-default dark:text-white w-full flex justify-between"
                onClick={() => {
                  setRegion(region === "Americas" ? null : "Americas");
                  setIsOpen(false);
                }}
              >
                <span>Americas</span> {region === "Americas" ? "✓" : ""}
              </button>
            </li>
            <li>
              <button
                className="cursor-default dark:text-white w-full flex justify-between"
                onClick={() => {
                  setRegion(region === "Asia" ? null : "Asia");
                  setIsOpen(false);
                }}
              >
                <span>Asia</span> {region === "Asia" ? "✓" : ""}
              </button>
            </li>
            <li>
              <button
                className="cursor-default dark:text-white w-full flex justify-between"
                onClick={() => {
                  setRegion(region === "Europe" ? null : "Europe");
                  setIsOpen(false);
                }}
              >
                <span>Europe</span> {region === "Europe" ? "✓" : ""}
              </button>
            </li>
            <li>
              <button
                className="cursor-default dark:text-white w-full flex justify-between"
                onClick={() => {
                  setRegion(region === "Oceania" ? null : "Oceania");
                  setIsOpen(false);
                }}
              >
                <span>Oceania</span> {region === "Oceania" ? "✓" : ""}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
