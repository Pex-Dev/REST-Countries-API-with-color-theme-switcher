import { useCountry } from "./context/CountryContext";
import Header from "./components/Header";
import FlagsList from "./components/FlagsList";
import CountryDetails from "./components/CountryDetails";

function App() {
  const { country } = useCountry();
  return (
    <div className="min-h-dvh ">
      <Header />
      {country ? <CountryDetails /> : <FlagsList />}
    </div>
  );
}

export default App;
