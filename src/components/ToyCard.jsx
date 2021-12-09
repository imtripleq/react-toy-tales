import React, { Component } from "react";

class ToyCard extends Component {
  render() {
    const { name, image, likes, id } = this.props.cards;
    // console.log(name, id);
    // console.log(this.props.deleteID);
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn">Like {"<3"}</button>
        <button
          className="del-btn"
          onClick={this.props.deleteID}
          // passId={id}
        >
          Donate to GoodWill
        </button>
      </div>
    );
  }
}

export default ToyCard;
