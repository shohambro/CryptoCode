import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Companies from "./components/companies/Companies.jsx";
import Pricing from "./components/pricing/Pricing.jsx";
import Earnings from "./components/earnings/Earnings.jsx";
import Status from "./components/status/Status.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Pricing />
      <Earnings />
      <Status />
    </>
  );
}

export default App;
