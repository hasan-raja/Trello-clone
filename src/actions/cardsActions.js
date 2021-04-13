import {CONSTANTS} from '../actions'

export const addCard = (cardId,text) => {
  return {
      type:CONSTANTS.ADD_CARD ,
      payload:{text,cardId},
  };
};