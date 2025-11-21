import { useCountry } from "../context/CountryContext";
export default function Error() {
  const { retryFetch } = useCountry();
  return (
    <div className="px-5 md:px-7 w-fit mx-auto mt-15 md:mt-20 flex flex-col md:flex-row gap-10 justify-center items-center">
      <svg
        className="dark:text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="150"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M12 9v4" />
        <path d="M12 16v.01" />
      </svg>
      <div className="flex flex-col gap-8 md:items-start">
        <p className="text-lg md:text-2xl text-center md:text-left dark:text-white">
          Failed to load countries. Please try again later.
        </p>
        <button
          onClick={() => retryFetch()}
          className="bg-white dark:bg-dark-mode-elements px-7 py-2 rounded-md shadow hover:cursor-pointer dark:text-white"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
