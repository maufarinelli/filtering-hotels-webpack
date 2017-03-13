import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { FilterState } from '../state/app.initialState';

import { FilteringHotelsService } from '../filtering-hotels.service';
import { Price } from './price';

@Component({
  moduleId: module.id,
  selector: 'prices',
  templateUrl: './prices.html'
})
export class PricesComponent {
  priceValues: Price[];
  selectedStartPrice: number;
  selectedEndPrice: number;

  constructor(
    private filteringHotelsService: FilteringHotelsService,
    private ngRedux: NgRedux<FilterState>
  ) {}

  ngOnInit(): void {
    this.filteringHotelsService.getPriceValues()
      .then(priceValues => this.priceValues = priceValues);
  }

  onSelectStartPrice() {
    this.ngRedux.dispatch({ type: 'PRICE_START_CHANGE', payload: {id: 200, name: 'startPrice', value: this.selectedStartPrice} });
  }

  onSelectEndPrice() {
    this.ngRedux.dispatch({ type: 'PRICE_END_CHANGE', payload: {id: 201, name: 'endPrice', value: this.selectedEndPrice} });
  }

  startPriceState(price) {
    return this.selectedEndPrice <= price.value;
  }

  endPriceState(price) {
    return this.selectedStartPrice >= price.value;
  }
}
