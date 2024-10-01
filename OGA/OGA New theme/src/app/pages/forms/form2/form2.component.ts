import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css'],
})
export class Form2Component {
  @Output() selectedValuesChange = new EventEmitter<any>();

  

  lobOptions: string[] = [];
  yearOptions: any[] = [];
  dateOptions: any[] = [];

  showChart = false; 
  selectedValues: any = {};

  constructor(private dataService: DataService) {}

  transferDataForm2(selectedValues: any){
    this.selectedValues = selectedValues;
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.fetchData().subscribe((data) => {
      this.populateOptions(data);
    });
  }

  populateOptions(data: any[]) {
    this.lobOptions = ['All',...new Set(data.map((item) => item.LOB))];
    this.yearOptions = ['All',...new Set(data.map(item => new Date(item.Date).getFullYear()))];  
    this.dateOptions = ["All","Weekly", "Monthly", "Quarterly", "Half-Yearly", "Yearly"];
  }

  onSubmit() {

    this.selectedValuesChange.emit(this.selectedValues);
    
    if (
      this.selectedValues.lob &&
      this.selectedValues.year &&
      this.selectedValues.frequency
    ) {
      this.showChart = true;
    }
  }

  onReset() {
    this.selectedValues = {};
    this.showChart = false;
  }
}
