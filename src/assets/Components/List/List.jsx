import React from "react";
import ListItem from "./../ListItem/ListItem";

function List(props) {
  return (
    <div className="listContainer">
      {props.product.map((product) => {
        if (product.price > 200) {
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
