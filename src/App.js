import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import OurTeam from "./Components/Team/OurTeam";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";
import Pricing from "./Components/Pricing/Pricing";
import NotFound from "./Components/Shared/NotFound";


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes >
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/team" element={<OurTeam></OurTeam>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
