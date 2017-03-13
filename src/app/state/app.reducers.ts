import { Action } from './app.actions';
import { FilterState, initialState } from './app.initialState';

export interface Reducer<T> {
  (state: T, action: Action): T
}

export const filterReducer: Reducer<FilterState> = function(state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case 'ACCOMMODATION_TYPE_CHANGE':
      state.accommodationTypes.map(type => {
        type.id === action.payload.id ?
          Object.assign({}, type, {checked: action.payload.checked}) :
          type;
      });
    case 'SCORE_START_CHANGE':
      state.scores.map(score => {
        score.id === action.payload.id ?
          Object.assign({}, score, score.value = action.payload.value) :
          score
      });
    case 'SCORE_END_CHANGE':
      state.scores.map(score => {
        score.id === action.payload.id ?
          Object.assign({}, score, score.value = action.payload.value) :
          score
      });
    case 'PRICE_START_CHANGE':
      state.prices.map(price => {
        price.id === action.payload.id ?
          Object.assign({}, price, price.value = action.payload.value) :
          price
      });
    case 'PRICE_END_CHANGE':
      state.prices.map(price => {
        price.id === action.payload.id ?
          Object.assign({}, price, price.value = action.payload.value) :
          price
      });
  }
  console.log(state);
  return state;
};
