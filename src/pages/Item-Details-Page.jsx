import React from "react";
import Data from "./../../public/data.json";
import { useParams } from "react-router-dom";



function ItemDetailsPage(props) {
  const { itemsId } = useParams();
const itemsdetails = Data.find((items) => items.id === itemsId);
console.log(itemsdetails);

  return (
    <div className="ItemDetails">
      <article>
        {/* <img src={itemsdetails.images} alt="Product Image" /> */}
        {/* <h1>
          {" "}
          <strong> {itemsdetails.title}</strong>
        </h1>
        <p className="category">{itemsdetails.category}</p>
        <div className="info">
          <p>{itemsdetails.description}</p>
          <p>
            <strong>Price :</strong>
            {itemsdetails.price} ${" "}
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
        </div> */}
        
      </article>
    </div>
  );
}

export default ItemDetailsPage;

// "id": 1,
// "title": "iPhone 9",
// "description": "An apple mobile which is nothing like apple",
// "price": 549,
// "discountPercentage": 12.96,
// "rating":
// "stock":
// "brand":
// "category":
// "thumbnail":
// "images":
