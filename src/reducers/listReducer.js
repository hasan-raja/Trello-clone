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
        {
          id: `card-${0}`,
          text: "we created a renducer",
        },
        {
          id: `card-${1}`,
          text: "we created a static list of card 21",
        },
        {
          id: `card-${2}`,
          text: "we created a static list of card 22",
        },
    ],
  },
  {
    title: "Pending Tasks",
    id: `list-${2}`,
    cards: [],
  },
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

    case CONSTANTS.DRAG_HAPPENED:{
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type
      } = action.payload;
      const newState = [...state];

      //dragging list around
      if(type==="list"){
        const list=newState.splice(droppableIndexStart,1);
        newState.splice(droppableIndexEnd,0,...list);
        return newState;
      }


      //in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card=list.cards.splice(droppableIndexStart,1);//things selected
        list.cards.splice(droppableIndexEnd,0,...card);//things to be dropped
      }

      //other list
      if (droppableIdStart !== droppableIdEnd){
        //find the list where drag happened
        const listStart = state.find((list) => droppableIdStart === list.id);

        //pull out the card form the list
        const card=listStart.cards.splice(droppableIndexStart,1);

        //find the list where drag end
        const listEnd= state.find((list)=>droppableIdEnd===list.id);

        //put the card in new list
        listEnd.cards.splice(droppableIndexEnd,0,...card)
      }
      return newState;
    }
    default:
      return state;
  }
};

export default listReducer;
