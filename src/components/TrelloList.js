import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: lightblue;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin-right: 8px;
`;

const TrelloList = ({ title, cards, listId, index }) => {
  return (
    <Draggable draggableId={String(listId)} index={index}>
      {(provided) => (
        <ListContainer
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        // style={styles.container}
      >
        <Droppable droppableId={String(listId)}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <h1>{title}</h1>
              {cards.map((card, index) => (
                <TrelloCard
                  key={card.id}
                  text={card.text}
                  id={card.id}
                  index={index}
                />
              ))}
              <TrelloActionButton listId={listId} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </ListContainer>
      )}
    </Draggable>
  );
};

// const styles = {
//   container: {
//     backgroundColor: "lightblue",
//     borderRadius: 3,
//     width: 300,
//     height: "100%",
//     padding: 8,
//     margin: 12,
//     marginRight: 8,
//   },
// };

export default TrelloList;
