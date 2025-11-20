import Header from "./assets/components/Header";
import FlagsList from "./assets/components/FlagsList";
import CountryProvider from "./assets/context/CountryContext";

function App() {
  return (
    <CountryProvider>
      <div className="min-h-dvh ">
        <Header />
        <FlagsList />
      </div>
    </CountryProvider>
  );
}

export default App;
