import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";

const TrelloList = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h1>{title}</h1>
      {cards.map((card) => (
        <TrelloCard key={card.id} text={card.text} />
      ))}
      <TrelloActionButton />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "lightblue",
    borderRadius: 3,
    width: 300,
    padding: 8,
    margin: 12,
    marginRight: 8,
  },
};

export default TrelloList;
