import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { FilterState } from '../state/app.initialState';

import { FilteringHotelsService } from '../filtering-hotels.service';
import { Score } from './score';

@Component({
  moduleId: module.id,
  selector: 'scores',
  templateUrl: './scores.html',
})
export class ScoresComponent {
  scoresValues: Score[];
  selectedStartValue: number;
  selectedEndValue: number;

  constructor(
    private filteringHotelsService: FilteringHotelsService,
    private ngRedux: NgRedux<FilterState>
  ) {}

  ngOnInit(): void {
    this.filteringHotelsService.getScoreValues()
      .then(scoresValues => this.scoresValues = scoresValues);
  }

  onSelectStartValue() {
    this.ngRedux.dispatch({ type: 'SCORE_START_CHANGE', payload: {id: 100, name: 'startScore', value: this.selectedStartValue} });
  }

  onSelectEndValue() {
    this.ngRedux.dispatch({ type: 'SCORE_END_CHANGE', payload: {id: 101, name: 'endScore', value: this.selectedEndValue} });
  }

  startScoreState(score) {
    return this.selectedEndValue <= score.value;
  }

  endScoreState(score) {
    return this.selectedStartValue >= score.value;
  }

}
