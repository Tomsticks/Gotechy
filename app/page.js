import "./globals.css";
import NavComponent from "./components/LandingPage/NavBar";
import HeroComponent from "./components/LandingPage/Hero";
import OurstoryComponent from "./components/LandingPage/Ourstory";
import FounderComponent from "./components/LandingPage/Founder";
import AvaliableCourses from "./components/LandingPage/AvaliableCourses";
import LearningMethod from "./components/LandingPage/LearningMethod";
import Review from "./components/LandingPage/Review";
import Delivery from "./components/LandingPage/Delivery";
import Joinus from "./components/LandingPage/Joinus";
import Footer from "./components/LandingPage/Footer";

// import { ThemeProvider } from "@material-tailwind/react";
export default function MyApp() {
  return (
    <div>
      <NavComponent />
      <HeroComponent />
      <OurstoryComponent />
      <FounderComponent />
      <AvaliableCourses />
      <LearningMethod />
      <Review />
      <Delivery />
      <Joinus />
      <Footer />
    </div>
  );
}
