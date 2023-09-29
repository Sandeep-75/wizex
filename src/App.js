import { Fragment } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Partners from "./components/partners";
import GrowthStory from "./components/growthStory";
import InvestmentStrategy from "./components/investmentStrategy";
import Xfactor from "./components/xfactor";
import StrategyAllocation from "./components/strategyAllocation";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <GrowthStory />
      <InvestmentStrategy />
      <StrategyAllocation />
      <Xfactor />
      <Testimonials />
      <Partners />
      <Footer />
    </Fragment>
  );
}

export default App;
