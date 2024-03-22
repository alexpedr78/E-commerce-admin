import Navbar from "./assets/Components/NavBar/Footer/NavBar/Navbar";
import Footer from "./assets/Components/Footer/Footer";
import SideBar from "./assets/Components/SideBar/SideBar";
import Data from "./../public/data.json";
import "./App.css";
import { useState } from "react";
import List from "./assets/Components/List/List";
import ListItem from "./assets/Components/ListItem/ListItem";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About-Page";
import ItemsDetails from "./pages/Item-Details-Page";
import HomePage from "./pages/Home-Page";
import NotFound from "./pages/Not-Found-Page";

function App() {
  const [product, setProduct] = useState(Data);

  function handleDelete(id) {
    const filterArray = product.filter((oneProduct) => {
      // console.log(id, oneProduct.id);
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
            {/* {product.map((product) => {
              if (product.price > 500) {
                return (
                  <ListItem
                    handleDelete={handleDelete}
                    key={product.id}
                    product={product}
                  />
                );
              }
            })} */}
            <List handleDelete={handleDelete} product={product} />
          </div>
        </div>
        <Footer />
      </div>
      /////////////////yo Alex from here are the changes im gonna make ok!!/////
      <ItemsDetails/>
      <Routes>
        <Route path="/AboutUs" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="/ItemsDetails" element={<ItemsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
