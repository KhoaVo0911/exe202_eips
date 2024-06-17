import "../App.css"

import About from "./Services";
import FAQ from "./FAQ";
import MyFooter from "../components/Footer";
// import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Services from "./About";
import Blog from "./Blog";
import Feedback from "./Feedback";


function OwenrPage() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Blog/>
      <FAQ/>
      <Feedback/>
      <Newsletter/>
      <MyFooter/>
    </>
  );
}

export default OwenrPage;
