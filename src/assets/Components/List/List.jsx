import React from "react";
import ListItem from "./../ListItem/ListItem";

function List(props) {
  console.log(props);
  return (
    <div className="listContainer">
      {props.product.map((product) => {
        if (product.price > 500) {
          return (
            <ListItem
              handleEdit={props.handleEdit}
              handleDelete={props.handleDelete}
              key={product.id}
              product={product}
            />
          );
        }
      })}
    </div>
  );
}

export default List;
