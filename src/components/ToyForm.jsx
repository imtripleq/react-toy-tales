import React, { Component } from "react";

class ToyForm extends Component {
  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.props.newSubmit}>
          <h3>Create a toy!</h3>
          <input
            onChange={this.props.newName}
            type="text"
            name="name"
            placeholder="Enter a toy's name..."
            value={this.props.imgName}
            className="input-text"
          />
          <br />
          <input
            onChange={this.props.newImage}
            type="text"
            name="image"
            placeholder="Enter a toy's image URL..."
            value={this.props.imgValue}
            className="input-text"
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Create New Toy"
            className="submit"
          />
        </form>
      </div>
    );
  }
}

export default ToyForm;
