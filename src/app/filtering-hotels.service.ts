import { Injectable } from '@angular/core';

import { AccommodationType } from './accommodation-type/accommodation-type';
import { SCORE_VALUES } from './score/mock-scores';
import { PRICE_VALUES } from './prices/mock-prices';
import { HOTELS } from './hotels-list/mock-hotels-list';
import { initialState } from './state/app.initialState';

@Injectable()
export class FilteringHotelsService {
  getAccommodationType(): Promise<AccommodationType[]> {
    return Promise.resolve(initialState.accommodationTypes);
  }

  getScoreValues(): Promise<any[]> {
    return Promise.resolve(SCORE_VALUES);
  }

  getPriceValues(): Promise<any[]> {
    return Promise.resolve(PRICE_VALUES);
  }

  getHotels(): Promise<any[]> {
    return Promise.resolve(HOTELS);
  }

}
