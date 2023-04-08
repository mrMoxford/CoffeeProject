import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home.jsx";
import Regions from "./components/Regions.jsx";
import StorePage from "./pages/StorePage.jsx";
import styled from "styled-components";
import SingleProduct from "./pages/SingleProduct.jsx";
import ExploreRegion from "./pages/ExploreRegion";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ShoppingCart from "./pages/ShoppingCart";
import Footer from "./components/Footer";
// const Container = styled.div`
//   height: 100%;
//   width: 100%;
// `;
function App() {
  return (
    <div>
      {/* <NavBar />
      <Home />
      <SignUp />
      <Login />
      <Regions />
      <ExploreRegion />
      <StorePage />
      <SingleProduct /> */}
      <ShoppingCart />
      <Footer />
    </div>
  );
}

export default App;
