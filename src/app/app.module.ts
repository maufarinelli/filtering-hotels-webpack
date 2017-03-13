import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { createStore, Store } from 'redux';
import { FilterState } from './state/app.initialState';
import { filterReducer } from './state/app.reducers';

import { FilteringHotelsService } from './filtering-hotels.service';
import { AccommodationTypeComponent }  from './accommodation-type/accommodation-type.component';
import { ScoresComponent } from './score/scores.component';
import { PricesComponent } from './prices/prices.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { AppComponent }  from './app.component';

export const appStore: Store<FilterState> = createStore(filterReducer);

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgReduxModule.forRoot() ],
  declarations: [ AppComponent, AccommodationTypeComponent, ScoresComponent, PricesComponent, HotelsListComponent ],
  providers:    [ FilteringHotelsService ],
  bootstrap:    [ AppComponent ],
})
export class AppModule {
  constructor(ngRedux: NgRedux<FilterState>) {
    ngRedux.provideStore(appStore);
  }
}
