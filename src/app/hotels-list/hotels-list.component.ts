import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import * as _ from 'lodash';

import { FilterState } from '../state/app.initialState';

import { FilteringHotelsService } from '../filtering-hotels.service';

@Component({
  moduleId: module.id,
  selector: 'hotels-list',
  templateUrl: './hotels-list.html'
})
export class HotelsListComponent implements OnInit {
  private hotels: Object[];
  private allHotels;
  private accommodationTypesState$;

  constructor(
    private filteringHotelsService: FilteringHotelsService,
    private ngRedux: NgRedux<FilterState>
  ) {
    this.accommodationTypesState$ = this.ngRedux.subscribe(() => {
      this.onFilterHotels(this.ngRedux.getState());
    });
  }

  ngOnInit() {
    this.filteringHotelsService.getHotels()
      .then(hotels => {
        this.allHotels = hotels;
        this.onFilterHotels(this.ngRedux.getState());
      });
  }

  onFilterHotels(state) {
    var selectedAccommodations = state.accommodationTypes.filter(accommodationType => accommodationType.checked),
      startPrice = _.find(state.prices, { name: 'startPrice' }),
      endPrice = _.find(state.prices, { name: 'endPrice' }),
      startScore = _.find(state.scores, { name: 'startScore' }),
      endScore = _.find(state.scores, { name: 'endScore' });

    this.hotels = this.allHotels.filter(hotel => {
      return !!_.find(selectedAccommodations, {name: hotel.accommodationType}) &&
        parseFloat(hotel.price) >= startPrice.value && parseFloat(hotel.price) <= endPrice.value &&
        parseFloat(hotel.score) >= startScore.value && parseFloat(hotel.score) <= endScore.value;
    });
  }
}
