import { useCountry } from "../context/CountryContext";

export default function CountryDetails() {
  const { country } = useCountry();
  return (
    <div className="px-5 my-10 max-w-[1440px] mx-auto font-nunito-sans">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1d0b0b"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12l14 0" />
          <path d="M5 12l4 4" />
          <path d="M5 12l4 -4" />
        </svg>
        <span>Back</span>
      </button>
    </div>
  );
}
