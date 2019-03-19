import React, { Component } from "react";
import MenuList from "./components/MenuList";
import MenuForm from "./components/MenuForm";
import { Container, } from "semantic-ui-react";
import axios from "axios";

class App extends Component {
  state = {menus: [], };

  componentDidMount() {
    axios.get("/api/menus")
    .then( res => {
      this.setState({ menus: res.data });
    })
    .catch( err => {
      console.log(err);
    })
  }

  addItem = (name) => {
    axios.post("/api/menus", {name})
      .then( res => {
        const { menus, } = this.state;
        this.setState({ menus: [...menus, res.data], });
      })
  }

  deleteItem = (id) => {
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      const { menus, } = this.state;
      this.setState({ menus: menus.filter(t => t.id !== id), })
    })
  }


  render() {
    return (
      <Container>
        <h1> Resturant Menus </h1>
        <MenuForm addItem={this.addItem} />
        <br />
        <hr />
        <br />
        <MenuList
          menus={this.state.menus}
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
        />
      </Container>
    );
  }
}

export default App;
