import { useEffect, useRef, useState } from "react";
import { useCountry } from "../context/CountryContext";

export default function FilterButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<
    "Africa" | "Americas" | "Asia" | "Europe" | "Oceania" | null
  >(null);

  const filterRef = useRef<HTMLDivElement>(null);
  const { setRegion, loading } = useCountry();

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
        <span>{filter ? filter : "Filter by Region"}</span>
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
        <div className="absolute bg-white dark:bg-dark-mode-elements mt-2 p-5 w-full shadow rounded md:rounded-md">
          <ul className="flex flex-col gap-1 font-nunito-sans z-10">
            <li>
              <button
                className="cursor-default dark:text-white w-full flex justify-between"
                onClick={() => {
                  setFilter(null);
                  setRegion(null);
                  setIsOpen(false);
                }}
              >
                <span>All</span> {filter === null ? "✓" : ""}
              </button>
            </li>
            <li>
              <button
                className="cursor-default dark:text-white w-full flex justify-between"
                onClick={() => {
                  setFilter(filter === "Africa" ? null : "Africa");
                  setRegion(filter === "Africa" ? null : "Africa");
                  setIsOpen(false);
                }}
              >
                <span>Africa</span> {filter === "Africa" ? "✓" : ""}
              </button>
            </li>
            <li>
              <button
                className="cursor-default dark:text-white w-full flex justify-between"
                onClick={() => {
                  setFilter(filter === "Americas" ? null : "Americas");
                  setRegion(filter === "Americas" ? null : "Americas");
                  setIsOpen(false);
                }}
              >
                <span>Americas</span> {filter === "Americas" ? "✓" : ""}
              </button>
            </li>
            <li>
              <button
                className="cursor-default dark:text-white w-full flex justify-between"
                onClick={() => {
                  setFilter(filter === "Asia" ? null : "Asia");
                  setRegion(filter === "Asia" ? null : "Asia");
                  setIsOpen(false);
                }}
              >
                <span>Asia</span> {filter === "Asia" ? "✓" : ""}
              </button>
            </li>
            <li>
              <button
                className="cursor-default dark:text-white w-full flex justify-between"
                onClick={() => {
                  setFilter(filter === "Europe" ? null : "Europe");
                  setRegion(filter === "Europe" ? null : "Europe");
                  setIsOpen(false);
                }}
              >
                <span>Europe</span> {filter === "Europe" ? "✓" : ""}
              </button>
            </li>
            <li>
              <button
                className="cursor-default dark:text-white w-full flex justify-between"
                onClick={() => {
                  setFilter(filter === "Oceania" ? null : "Oceania");
                  setRegion(filter === "Oceania" ? null : "Oceania");
                  setIsOpen(false);
                }}
              >
                <span>Oceania</span> {filter === "Oceania" ? "✓" : ""}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
