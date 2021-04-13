import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";

const TrelloList = ({ title, cards,listId }) => {
  return (
    <div style={styles.container}>
      <h1>{title}</h1>
      {cards.map((card) => (
        <TrelloCard key={card.id} text={card.text} />
      ))}
      <TrelloActionButton listId={listId}/>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "lightblue",
    borderRadius: 3,
    width: 300,
    height:"100%",
    padding: 8,
    margin: 12,
    marginRight: 8,
  },
};

export default TrelloList;
