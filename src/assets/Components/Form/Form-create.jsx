import React from "react";
import "./Form-create.css";
import { useState } from "react";

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
  console.log(stocks);

  function handleSubmit(event) {
    event.preventDefault();
    const newProduct = {
      id,
      title,
      description,
      price,
      stocks,
    };
    props.setProduct((products) => [...products, newProduct]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">id</label>
          <input id="id" value={id} type="text" onChange={handleId} />
        </div>

        <div>
          <label htmlFor="title">title</label>
          <input id="title" value={title} type="text" onChange={handleTitle} />
        </div>

        <div>
          <label htmlFor="description">description</label>
          <input
            id="description"
            value={description}
            type="text"
            onChange={handleDescription}
          />
        </div>

        <div>
          <label htmlFor="price">price</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={handlePrice}
          />
        </div>

        <div>
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
