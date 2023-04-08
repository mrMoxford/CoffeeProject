import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home.jsx";
import Regions from "./components/Regions.jsx";
import StorePage from "./pages/StorePage.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import ExploreRegion from "./pages/ExploreRegion";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ShoppingCart from "./pages/ShoppingCart";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/regions",
        element: <Regions />,
      },
      {
        path: "/regions/:region",
        element: <ExploreRegion />,
      },
      {
        path: "/store",
        element: <StorePage />,
      },
      {
        path: "/store/:id",
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: "/cart",
    element: <ShoppingCart />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
