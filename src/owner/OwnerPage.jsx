import "../App.css"

import About from "./About";
import Blog from "./Blog";
import MyFooter from "./Footer";
// import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Product from "./Product";
import Services from "./Services";


function OwenrPage() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Product/>
      <Blog/>
      <Newsletter/>
      <MyFooter/>
    </>
  );
}

export default OwenrPage;
