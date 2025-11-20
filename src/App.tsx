import Header from "./assets/components/Header";
import Flags from "./assets/components/FlagsList";
import CountryProvider from "./assets/context/CountryContext";

function App() {
  return (
    <CountryProvider>
      <div className="min-h-dvh ">
        <Header />
        <Flags />
      </div>
    </CountryProvider>
  );
}

export default App;
