import React from "react";
import Item from "./Item";

const MenuItem = ({ items}) => (
  <div>
    {items.map( item =>
      <Item key= { item.id } {...item} />
      )}
  </div>
)

export default MenuItem;
