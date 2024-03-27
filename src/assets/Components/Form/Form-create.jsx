import React from "react";
import "./Form-create.css";
import { useState } from "react";
import data from "./../../../../public/data.json";
function Form(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stocks, setStocks] = useState(0);
  const [id, setId] = useState("");

  const handleId = (e) => setId(e.currentTarget.value);
  const handleTitle = (e) => setTitle(e.currentTarget.value);
  const handleDescription = (e) => setDescription(e.currentTarget.value);
  const handlePrice = (e) => setPrice(e.currentTarget.value);
  const handleStocks = (e) => setStocks(e.currentTarget.value);

  function handleSubmit(event) {
    event.preventDefault();
    const newProduct = {
      id: crypto.randomUUID(),
      title,
      description,
      price,
      stocks,
    };
    props.setProduct((products) => [...products, newProduct]);
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="formAdd">
        {/* <div className="input">
          <label htmlFor="id">id</label>
          <input id="id" value={id} type="number" onChange={handleId} />
        </div> */}

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

        <button>create product</button>
      </form>
    </div>
  );
}

export default Form;
