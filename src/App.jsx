import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Navbar from "./assets/Components/NavBar/Navbar";
import Footer from "./assets/Components/Footer/Footer";
import SideBar from "./assets/Components/SideBar/SideBar";
import Data from "./../public/data.json";
import AboutPage from "./pages/About-Page/About-Page";
import HomePage from "./pages/Home-Page/Home-Page";
import NotFound from "./pages/Not-Found-Page/Not-Found-Page";
import ItemDetailsPage from "./pages/Item-Details-Page/Item-Details-Page";
import EditPage from "./pages/Edit-Page/EditPage";

function App() {
  const [showCreateBanner, setShowCreateBanner] = useState(false);
  const [product, setProduct] = useState([...Data]);
  const [searchString, setSearchString] = useState("");
  function handleDelete(id) {
    const filterArray = product.filter((oneProduct) => {
      return oneProduct.id !== id;
    });
    setProduct(filterArray);
  }
  function handleEdit(editedProduct) {
    console.log(editedProduct);
    const index = product.findIndex((item) => item.id === editedProduct.id);
    const updatedProducts = [...product];
    updatedProducts[index] = editedProduct;
    setProduct(updatedProducts);
  }
  function showCreate() {
    setShowCreateBanner(!showCreateBanner);
  }

  const productToDisplay = product.filter((oneProduct) =>
    oneProduct.title.toLowerCase().includes(searchString.toLowerCase())
  );
  return (
    <div className="main">
      <div className="fullBody">
        <Navbar />
        <div className="centralPartOfTheScreen">
          <SideBar />
          <div className="bodyContainer">
            <Routes>
              <Route path="/AboutUs" element={<AboutPage />} />
              <Route
                path="/"
                element={
                  <HomePage
                    setShowCreateBanner={setShowCreateBanner}
                    showCreateBanner={showCreateBanner}
                    showCreate={showCreate}
                    setSearchString={setSearchString}
                    searchString={searchString}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    setProduct={setProduct}
                    product={productToDisplay}
                  />
                }
              />
              <Route
                path={`/Edit/:id`}
                element={<EditPage handleEdit={handleEdit} product={product} />}
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
