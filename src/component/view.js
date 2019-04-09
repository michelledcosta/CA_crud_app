import React, { Component } from "react";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items
    };
  }

  componentDidMount() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://localhost:8080/");
    xmlhttp.send();
    xmlhttp.onload = function() {
      let serverData = xmlhttp.responseText;
      console.log(serverData);
      const data = JSON.parse(serverData);
      this.setState({ items: data });
      // console.log(this.state.data);
      this.props.handleViewChange(data);
    }.bind(this);
  }

  render() {
    let items = this.props.items;
    return (
      <div className="container">
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th>Sr</th>
                {/* <th>Item ID</th> */}
                <th>Name</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {items.map(function(items, index) {
                if (items.name === "cake") {
                  return (
                    <tr className="table-danger" key={index}>
                      <td>{index + 1}</td>
                      {/* <td>{items.id}</td> */}
                      <td>{items.name}</td>
                      <td>{items.cost}</td>
                    </tr>
                  );
                } else {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      {/* <td>{items.id}</td> */}
                      <td>{items.name}</td>
                      <td>{items.cost}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default View;
