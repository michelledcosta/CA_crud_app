import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: this.props.id,
      name: this.props.name,
      cost: this.props.cost
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    console.log("changed");
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick() {
    // console.log(this.state);
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "http://localhost:8080/");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    const data = JSON.stringify(this.state);
    xmlhttp.send(data);
    // xmlhttp.onload = function() {};
    this.props.handleFormChange(this.state);
    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Create
        </button>
        <br />

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title" id="exampleModalLabel">
                  Items Form
                </h1>
                <button type="button" className="close" data-dismiss="modal">
                  x
                </button>
              </div>
              <div className="modal-body">
                <div className="container">
                  {/* <div className="row">
                    <label>Item_ID:</label>
                    <input
                      type="text"
                      name="id"
                      value={this.state.id}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </div> */}
                  <div className="row">
                    <label>Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div className="row">
                    <label>cost:</label>
                    <input
                      type="number"
                      name="cost"
                      value={this.state.cost}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </div>
                  <br />
                  <button className="btn btn-dark" onClick={this.handleClick}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
