import React from "react";
import Menu from "./Menu";

const MenuList = ({ menus, updateItem, deleteItem, }) => (
  <div>
    { menus.map( menu =>
      <Menu
        key={menu.id}
        {...menu}
        updateItem={updateItem}
        deleteItem={deleteItem}
        />
      )
    }
  </div>
)
export default MenuList;
