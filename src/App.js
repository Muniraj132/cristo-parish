import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import AboutUs from "./Pages/AboutUs";
import SupportCenter from "./Pages/SupportCenter";
import MobileApp from "./Pages/MobileApp";
import Security from "./Pages/Security";
import ContactUs from "./Pages/ContactUs";
import MainLayout from "./layout";
import OurTeam from "./Pages/OurTeam";
import DataTransfer from "./Pages/DataTransfer";
import AboutCristo from "./Pages/AboutCristo";
import Features from "./Pages/Features";
import Sacramental from "./Pages/Sacramental";

function App() {
  const paths = [
    "dashboard",
    "families",
    "members",
    "basic-christian-communities",
    "baptism",
    "holy-communion",
    "confirmation",
    "marriage",
    "death",
    "commission",
    "association",
    "parish-prayer",
    "parish-liturgicalcalendar",
    "parish-donations",
    "parish-subscription",
    "parish-calendar",
    "parish-scheduledsms",
  ];
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="supportcenter" element={<SupportCenter />} />
            <Route path="mobileapp" element={<MobileApp />} />
            <Route path="security" element={<Security />} />
            <Route path="team" element={<OurTeam />} />
            <Route path="datatransfer" element={<DataTransfer />} />
            <Route path="aboutcristo" element={<AboutCristo />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="sacrements" element={<Sacramental />} />
            {paths.map((path, index) => (
              <Route key={index} path={path} element={<Features />} />
            ))}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
