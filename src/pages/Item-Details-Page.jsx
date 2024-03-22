import React from "react";
import Data from "./../../public/data.json";
import { useParams } from "react-router-dom";

function ItemDetailsPage({ product }) {
  const { id } = useParams();

  const itemsdetails = product.find((items) => items.id === Number(id));
  console.log(product, itemsdetails);

  return (
    <div className="ItemDetails">
      <article>
        <img src={itemsdetails.image} alt="Product Image" />
        <h1>
          <strong> {itemsdetails.title}</strong>
        </h1>
        <p className="category">{itemsdetails.category}</p>
        <div className="info">
          <p>{itemsdetails.description}</p>
          <p>
            <strong>Price :</strong>
            {itemsdetails.price}
          </p>
          <p>
            <strong>Discount : </strong>
            {itemsdetails.discountPercentage} %
          </p>
          <p>
            <strong>Rating : </strong>
            {itemsdetails.rating} %
          </p>
          <p>
            <strong>Stock :</strong>
            {itemsdetails.stock} ${" "}
          </p>
          <p>
            <strong>Brand : </strong>
            {itemsdetails.brand} %
          </p>
          <p>
            <strong>Category :</strong>
            {itemsdetails.category} ${" "}
          </p>
          <p>
            <strong>Thumbnail : </strong>
            {itemsdetails.thumbnail} %
          </p>
        </div>
      </article>
    </div>
  );
}

export default ItemDetailsPage;
