import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../data.service';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
})
export class Form1Component {
  @Output() selectedValuesChange = new EventEmitter<any>();

  lobOptions: string[] = [];
  automationOptions: string[] = [];
  dateOptions: string[] = [];

  showChart = false;
  selectedValues: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.fetchData().subscribe((data) => {
      this.populateOptions(data);
    });
  }

  transferDataForm1(selectedValues: any){
    this.selectedValues = selectedValues;
  }

  populateOptions(data: any[]) {
    this.lobOptions = ['All',...new Set(data.map((item) => item.LOB))];
    this.automationOptions = ['All',...new Set(data.map((item) => item.Automation))];
    this.dateOptions = ["All","Weekly", "Monthly", "Quarterly", "Half-Yearly", "Yearly"];
  }

  onSearch() {
    
    this.selectedValuesChange.emit(this.selectedValues);


    // if (
    //   this.selectedValues.lob &&
    //   this.selectedValues.automation &&
    //   this.selectedValues.frequency &&
    //   this.selectedValues.fromDate &&
    //   this.selectedValues.toDate
    // ) {
      this.showChart = true;
    // }
  }

  onReset() {
    this.selectedValues = {};
    this.showChart = false;
  }
}
