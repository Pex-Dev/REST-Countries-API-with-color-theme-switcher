import { useCountry } from "./context/CountryContext";
import Header from "./components/Header";
import FlagsList from "./components/FlagsList";
import CountryDetails from "./components/CountryDetails";
import Error from "./components/Error";

function App() {
  const { country, error } = useCountry();
  return (
    <div className="min-h-dvh ">
      <Header />
      {error ? <Error /> : country ? <CountryDetails /> : <FlagsList />}
    </div>
  );
}

export default App;
