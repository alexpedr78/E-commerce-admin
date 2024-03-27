import React, { useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

function EditPage(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const existingProduct = props.product.find((product) => product.id === id);

  const [title, setTitle] = useState(existingProduct.title);
  const [description, setDescription] = useState(existingProduct.description);
  const [price, setPrice] = useState(existingProduct.price);
  const [stocks, setStocks] = useState(existingProduct.stock);

  function handleSubmit(event) {
    event.preventDefault();

    const editedProduct = {
      id: id,
      title: title,
      description: description,
      price: price,
      stocks: stocks,
    };
    props.handleEdit(editedProduct);
    navigate("/");
  }

  function handleTitle(event) {
    const value = event.target.value.trim();
    if (!value) {
      setTitle(existingProduct.title);
    } else {
      setTitle(event.target.value);
    }
  }

  function handleDescription(event) {
    const value = event.target.value.trim();
    if (!value) {
      setDescription(existingProduct.description);
    } else {
      setDescription(event.target.value);
    }
  }

  function handlePrice(event) {
    const value = event.target.value.trim();
    if (!value) {
      setPrice(existingProduct.price);
    } else {
      setPrice(event.target.value);
    }
  }

  function handleStocks(event) {
    const value = event.target.value.trim();
    if (!value) {
      setStocks(existingProduct.stocks);
    } else {
      setStocks(event.target.value);
    }
  }

  return (
    <div>
      <h1>EditPage</h1>
      <form onSubmit={handleSubmit} className="formAdd">
        <div className="input">
          <label htmlFor="title">title</label>
          <input id="title" value={title} type="text" onChange={handleTitle} />
        </div>

        <div className="input">
          <label htmlFor="description">description</label>
          <input
            id="description"
            value={description}
            type="text"
            onChange={handleDescription}
          />
        </div>

        <div className="input">
          <label htmlFor="price">price</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={handlePrice}
          />
        </div>

        <div className="input">
          <label htmlFor="stocks">stocks</label>
          <input
            type="number"
            id="stocks"
            value={stocks}
            onChange={handleStocks}
          />
        </div>
        <button>Submit Edit</button>
      </form>
    </div>
  );
}

export default EditPage;
