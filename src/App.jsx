import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/Components/NavBar/Footer/NavBar/Navbar";

import Footer from "./assets/Components/Footer/Footer";
import SideBar from "./assets/Components/SideBar/SideBar";
import Data from "./../public/data.json";
import "./App.css";
import { useState } from "react";
import List from "./assets/Components/List/List";
import ListItem from "./assets/Components/ListItem/ListItem";

import AboutPage from "./pages/About-Page";
import ItemsDetails from "./pages/Item-Details-Page";
import HomePage from "./pages/Home-Page";
import NotFound from "./pages/Not-Found-Page";
import ItemDetailsPage from "./pages/Item-Details-Page";

function App() {
  const [product, setProduct] = useState(Data);

  function handleDelete(id) {
    const filterArray = product.filter((oneProduct) => {
      return oneProduct.id !== id;
    });
    setProduct(filterArray);
  }

  return (
    <div className="main">
      <div>
        <Navbar />
        <div className="centralPartOfTheScreen">
          <SideBar />
          <div>
            <Routes>
              <Route path="/AboutUs" element={<AboutPage />} />
              <Route
                path="/"
                element={
                  <HomePage
                    handleDelete={handleDelete}
                    setProduct={setProduct}
                    product={product}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
              <Route
                path={`/ItemsDetails/:id`}
                element={<ItemDetailsPage product={product} />}
              />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
{
  /* {product.map((product) => {
              if (product.price > 500) {
                return (
                  <ListItem
                    handleDelete={handleDelete}
                    key={product.id}
                    product={product}
                  />
                );
              }
            })} */
}
