import { Link } from "react-router-dom";
import "./ListItem.css";
import EditPage from "../../../pages/Edit-Page/EditPage";

function List(props) {
  // console.log(props.product.id);
  return (
    <article className="product">
      <Link to={`/ItemsDetails/${props.product.id}`}>
        <h1>{props.product.title}</h1>{" "}
        <p className="category">{props.product.category}</p>
      </Link>

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

      <Link to={`/Edit/${props.product.id}`}>
        <button>Edit</button>
      </Link>
    </article>
  );
}

export default List;
