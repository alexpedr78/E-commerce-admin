import Navbar from "./assets/Components/NavBar/Footer/NavBar/Navbar";
import Footer from "./assets/Components/Footer/Footer";
import SideBar from "./assets/Components/SideBar/SideBar";
import Data from "./../public/data.json";
import "./App.css";
import { useState } from "react";
import List from "./assets/Components/List/List";
import ListItem from "./assets/Components/ListItem/ListItem";

function App() {
  const [product, setProduct] = useState(Data);

  function handleDelete(id) {
    const filterArray = product.filter((oneProduct) => {
      console.log(id, oneProduct.id);
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
    </div>
  );
}

export default App;
