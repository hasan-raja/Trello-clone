import { CONSTANTS } from "../actions";

let listId = 3;
let cardId = 1;
const initialState = [
  {
    title: "General Tasks",
    id: `list-${0}`,
    cards: [
        //dummy value
      // {
      //   id: `card-${0}`,
      //   text: "",
      // },
    //   {
    //     id: 1,
    //     text: "we created a static list of card 2",
    //   },
    ],
  },
  {
    title: "Specific Tasks",
    id: `list-${1}`,
    cards: [
    // dummy value
    //   {
    //     id: 0,
    //     text: "we created a renducer",
    //   },
    //   {
    //     id: 1,
    //     text: "we created a static list of card 21",
    //   },
    //   {
    //     id: 2,
    //     text: "we created a static list of card 22",
    //   },
    ],
  },
  {
    title: "Pending Tasks",
    id: `list-${2}`,
    cards: []
}

];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listId}`,
      };
      listId += 1;
      return [...state, newList];
    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: `card-${cardId}`,
      };
      cardId += 1;
      const newState = state.map((list) => {
        if (list.id === action.payload.cardId) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      return newState;
    default:
      return state;
  }
};

export default listReducer;
