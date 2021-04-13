import React, { Component } from "react";
import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App" style={{ backgroundColor: "#e1e1e3" }}>
        <h1>Hello Aj</h1>
        <div style={styles.listsContainer}>
          {lists.map((list) => (
            <TrelloList title={list.title} cards={list.cards} key={list.id} />
          ))}
          <TrelloActionButton list/>
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
  },
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
