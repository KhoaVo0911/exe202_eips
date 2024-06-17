import "../App.css"

import About from "./Services";
import FAQ from "./FAQ";
import MyFooter from "./Footer";
// import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Services from "./About";
import Blog from "./Blog";


function OwenrPage() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Blog/>
      <FAQ/>
      <Newsletter/>
      <MyFooter/>
    </>
  );
}

export default OwenrPage;
