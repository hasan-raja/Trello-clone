import React, { Component } from "react";
import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {

  onDragEnd=()=>{

  }

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div
          className="App"
          style={{
            backgroundColor: "#e1e1e3",
            backgroundSize: "contain",
            width: "100vw",
            height: "100vh",
          }}
        >
          <h1>Hello Aj</h1>
          <div style={styles.listsContainer}>
            {lists.map((list) => (
              <TrelloList
                listId={list.id}
                title={list.title}
                cards={list.cards}
                key={list.id}
              />
            ))}
            <TrelloActionButton list />
          </div>
        </div>
      </DragDropContext>
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
