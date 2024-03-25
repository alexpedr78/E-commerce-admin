import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EditPage(props) {
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stocks, setStocks] = useState(0);

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
  }

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleDescription(event) {
    setDescription(event.target.value);
  }

  function handlePrice(event) {
    setPrice(event.target.value);
  }

  function handleStocks(event) {
    setStocks(event.target.value);
  }
  console.log(id, title, price);
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
