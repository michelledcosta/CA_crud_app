import React, { Component } from "react";
import Form from "./component/form";
import View from "./component/view";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      // id: "",
      name: "",
      cost: ""
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleFormChange(data) {
    let items = {
      // id: data.id,
      name: data.name,
      cost: data.cost
    };
    let items_array = [...this.state.items];
    items_array.push(items);
    this.setState({ items: items_array });
    // console.log("changed");
  }

  handleViewChange(data) {
    console.log("handleViewChange: this is the app comp");
    this.setState({ items: data });
  }

  render() {
    return (
      <div className="container">
        <Form
          // id={this.state.id}
          name={this.state.name}
          cost={this.state.cost}
          handleFormChange={this.handleFormChange}
        />
        <br />
        <View
          items={this.state.items}
          handleViewChange={this.handleViewChange}
        />
      </div>
    );
  }
}

export default App;
