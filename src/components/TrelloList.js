import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";
const TrelloList = ({ title, cards, listId }) => {
  return (
    <Droppable droppableId={String(listId)}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}style={styles.container}>
          <h1>{title}</h1>
          {cards.map((card,index) => (
            <TrelloCard key={card.id} text={card.text} id={card.id} index={index} />
          ))}
          <TrelloActionButton listId={listId} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: "lightblue",
    borderRadius: 3,
    width: 300,
    height: "100%",
    padding: 8,
    margin: 12,
    marginRight: 8,
  },
};

export default TrelloList;
