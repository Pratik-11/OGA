import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectionService {
  private selectedValues: any;

  setSelectedValues(values: any) {
    this.selectedValues = values;
  }

  getSelectedValues() {
    return this.selectedValues;
  }
}