import React from "react";
import ListItem from "./../ListItem/ListItem";
function List(props) {
  return (
    <div>
      {props.product.map((product) => {
        if (product.price > 500) {
          return (
            <ListItem
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
