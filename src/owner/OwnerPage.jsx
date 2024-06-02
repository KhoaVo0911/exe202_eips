import "../App.css"

import About from "./Services";
import FAQ from "./FAQ";
import MyFooter from "./Footer";
// import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Product from "./Product";
import Services from "./About";


function OwenrPage() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Product/>
      <FAQ/>
      <Newsletter/>
      <MyFooter/>
    </>
  );
}

export default OwenrPage;
