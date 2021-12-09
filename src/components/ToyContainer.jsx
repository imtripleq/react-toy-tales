import React from "react";
import ToyCard from "./ToyCard";

class ToyContainer extends React.Component {
  render() {
    return (
      <div id="toy-collection">
        {this.props.cards.map((card, id) => {
          return (
            <ToyCard
              cards={card}
              key={id}
              deleteID={this.props.deleteID}
              likeBtn={this.props.likeBtn}
            />
          );
        })}
      </div>
    );
  }
}

export default ToyContainer;
