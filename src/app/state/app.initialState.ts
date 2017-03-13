import { ACCOMMODATION_TYPE } from '../accommodation-type/mock-accommodation-type';
import { SCORE } from '../score/mock-scores';
import { PRICE } from '../prices/mock-prices';

export interface FilterState {
  accommodationTypes: any
  scores: any
  prices: any
}

export const initialState: FilterState = Object.assign({}, {
  accommodationTypes: ACCOMMODATION_TYPE,
  scores: SCORE,
  prices: PRICE
});
