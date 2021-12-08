import React from "react";
import "./App.css";

import Header from "./components/Header";
import ToyForm from "./components/ToyForm";
import ToyContainer from "./components/ToyContainer";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      display: false,
      cards: [],
      newCard: {
        name: "",
        image: "",
        likes: 0,
      },
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/toys")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ cards: data });
        console.log(data);
        console.log(this.state);
      });
  }

  handleInputChange = (e) => {
    this.setState({
      newCard: { ...this.state.newCard, [e.target.name]: e.target.value },
    });
  };

  handleClick = () => {
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };

  handleSubmit = () => {
    const fetchNew = { ...this.state.newCard };
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fetchNew),
    });
  };

  handleDelete = (id) => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "DELETE",
    });
  };

  render() {
    return (
      <>
        <Header />
        {this.state.display ? (
          <ToyForm
            newName={this.handleInputChange}
            newImage={this.handleInputChange}
            newSubmit={this.handleSubmit}
            imgValue={this.state.newCard.image}
            imgName={this.state.newCard.name}
          />
        ) : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer cards={this.state.cards} delete={this.handleDelete} />
      </>
    );
  }
}

export default App;
