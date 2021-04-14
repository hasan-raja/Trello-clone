import React, { Component } from "react";
import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
class App extends Component {
  onDragEnd = (result) => {
    //reordering logic ends
    const { destination, source, draggableId,type} = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {/* <div
          className="App"
          style={{
            backgroundColor: "#e1e1e3",
            backgroundSize: "contain",
            width: "100vw",
            height: "100vh",
          }}
        > */}
        <h1>Hello Aj</h1>
        <Droppable droppableId="all-list" direction="horizontal" type="list">
          {(provided) => (
            <ListContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
            >
              {lists.map((list,index) => (
                <TrelloList
                  listId={list.id}
                  title={list.title}
                  cards={list.cards}
                  key={list.id}
                  index={index}
                />
              ))}
              <TrelloActionButton list />
            </ListContainer>
          )}
        </Droppable>
        {/* </div> */}
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
