import React from "react";
import ToyCard from "./ToyCard";

class ToyContainer extends React.Component {
  render() {
    return (
      <div id="toy-collection">
        {this.props.cards.map((card, id) => {
          return <ToyCard cards={card} key={id} delete={this.props.delete} />;
        })}
      </div>
    );
  }
}

export default ToyContainer;
