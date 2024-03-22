import { Link } from "react-router-dom";
import "./ListItem.css";

function List(props) {
  // console.log(props.product.id);
  return (
   
      <article className="product">
       <Link to={`/ItemsDetails`}><h1>{props.product.title}</h1> </Link>
      <p className="category">{props.product.category}</p>
      <div className="info">
        <p>{props.product.description}</p>

        <p>
          <strong>Price :</strong>
          {props.product.price} ${" "}
        </p>
        <p>
          <strong>Discount : </strong>
          {props.product.discountPercentage} %
        </p>
      </div>
      <button
        className="deleteButton"
        onClick={() => props.handleDelete(props.product.id)}
        >
        Delete
      </button>
    </article>
       
  );
}

export default List;
