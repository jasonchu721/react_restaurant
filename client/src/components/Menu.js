import React from "react";
import { Header, Button, Icon } from "semantic-ui-react";

const Menu = ({ id, name, deleteItem }) => (
  <div styles={styles.flex}>
    <Header as ="h2"> {name} </Header>

    <Button
      icon
      color="red"
      size="tiny"
      onClick={() => deleteItem(id)}
      style={{ marginLeft: "15px"}}
      >
    <Icon name="trash" />
    </Button>
  </div>
)

const styles = {
  flex: {
    display: 'flex',
    alignItems: 'center',
  }
}

export default Menu;
