import Header from "./components/Header";
import FlagsList from "./components/FlagsList";
import CountryProvider from "./context/CountryContext";

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
