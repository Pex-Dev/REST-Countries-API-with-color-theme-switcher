import { useState } from "react";

export default function FilterButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<
    "Africa" | "America" | "Asia" | "Europe" | "Oceania" | null
  >(null);

  return (
    <div className="relative w-fit">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-white dark:bg-dark-mode-elements px-6 py-3 md:py-4 shadow font-nunito-sans rounded md:rounded-md min-w-[195.61px] text-black  dark:text-white flex justify-between items-center gap-5 hover:cursor-pointer"
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
            <li
              className="cursor-default dark:text-white flex justify-between"
              onClick={() =>
                filter === "Africa" ? setFilter(null) : setFilter("Africa")
              }
            >
              <span>Africa</span> {filter === "Africa" ? "✓" : ""}
            </li>
            <li
              className="cursor-default dark:text-white flex justify-between"
              onClick={() =>
                filter === "America" ? setFilter(null) : setFilter("America")
              }
            >
              <span>America</span> {filter === "America" ? "✓" : ""}
            </li>
            <li
              className="cursor-default dark:text-white flex justify-between"
              onClick={() =>
                filter === "Asia" ? setFilter(null) : setFilter("Asia")
              }
            >
              <span>Asia</span> {filter === "Asia" ? "✓" : ""}
            </li>
            <li
              className="cursor-default dark:text-white flex justify-between"
              onClick={() =>
                filter === "Europe" ? setFilter(null) : setFilter("Europe")
              }
            >
              <span>Europe</span> {filter === "Europe" ? "✓" : ""}
            </li>
            <li
              className="cursor-default dark:text-white flex justify-between"
              onClick={() =>
                filter === "Oceania" ? setFilter(null) : setFilter("Oceania")
              }
            >
              <span>Oceania</span> {filter === "Oceania" ? "✓" : ""}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
