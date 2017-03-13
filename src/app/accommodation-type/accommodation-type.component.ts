import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { FilterState } from '../state/app.initialState';

import { FilteringHotelsService } from '../filtering-hotels.service';
import { AccommodationType } from './accommodation-type';

@Component({
  moduleId: module.id,
  selector: 'accommodation-type',
  templateUrl: './accommodation-type.html',
})
export class AccommodationTypeComponent  {
  accommodationTypes: AccommodationType[];
  accommodationTypesState: Observable<any>;

  constructor(
    private filteringHotelsService: FilteringHotelsService,
    private ngRedux: NgRedux<FilterState>
  ) {}

  ngOnInit(): void {
    this.filteringHotelsService.getAccommodationType()
      .then(types => this.accommodationTypes = types);

    this.accommodationTypesState = this.ngRedux.select((state: any) => {
      console.log(state.accommodationTypes);
      return state.accommodationTypes;
    });
  }

  onCheckToggle(accommodationType) {
    accommodationType.checked = !accommodationType.checked;
    this.ngRedux.dispatch({ type: 'ACCOMMODATION_TYPE_CHANGE', payload: accommodationType});
  }
}
