import { Component, OnInit, AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Input } from '@angular/core';

import { DataService } from '../../../data.service';

export interface TableRow {
  lob: string;
  automationName: string;
  count: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})




export class TableComponent implements OnInit, AfterViewInit {


  constructor(private dataService: DataService, private cdRef: ChangeDetectorRef) {}


  @Input() selectedValues: any;
  dataRec: any;
  automationCountArray: any[]=[]
  top3AutomationCountArray: any[]=[]

  tableData: TableRow[] = [];
  displayedColumns: string[] = ['lob', 'automationName', 'count'];

  isDataLoaded = false;

  ngOnInit() {
   
    setTimeout(() => {
      this.dataService.fetchData().subscribe((data) => {
        this.dataRec = data;
        console.log(this.dataRec)
  
        // Step 1: Prepare an empty object to store the automation counts
        const automationCounts = {};
  
        // Step 2: Loop through the data and count the occurrences of each automation
        for (const item of data) {
          const automation = item.Automation;
          if (automationCounts[automation]) {
            automationCounts[automation]++;
          } else {
            automationCounts[automation] = 1;
          }
        }
  
        // Step 3: Convert the automation counts object into an array of { LOB, Automation, Count }
         this.automationCountArray = Object.entries(automationCounts).map(([automation, count]) => ({
          lob: data[0].LOB, // Assuming all items have the same LOB
          automationName: automation,
          count: count as number,
        }));
  
        // Step 4: Sort the automation count array in descending order based on the count
        this.automationCountArray.sort((a, b) => b.count - a.count);
  
        // Step 5: Print the resulting array
        console.log(this.automationCountArray);
        this.top3AutomationCountArray = this.automationCountArray.slice(0, 3);
      console.log(this.top3AutomationCountArray);
      console.log(this.top3AutomationCountArray);
    this.tableData = this.top3AutomationCountArray;
    console.log('abc',this.top3AutomationCountArray);
      });
    },100);

  }
  
  ngAfterViewInit() {} 
  
}
