import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js';
import { Input } from '@angular/core';
import { log } from 'console';
import { DataService } from '../../../data.service';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements AfterViewInit {
  @Input() selectedValues: any;

  dataRec: any;
  lobOptions: any[] = [];
  yearOptions: any[] = [];
  frequencyOptions: string[] = [];
  automationOptions: string[] = [];
  automationOptionsUnique: any[] = [];
  automationCountArray: number[] = [];
  filteredData: any;
  backgroundColorArray: string[];


  constructor(private dataService: DataService) {}

  generateRandomColors(): string[] {
    const backgroundColorArray: string[] = [];
    const optionsLength = this.automationOptionsUnique.length;
  
    for (let i = 0; i < optionsLength; i++) {
      const red = Math.floor(Math.random() * 180) + 30; // Adjust the range of red value
      const green = Math.floor(Math.random() * 180) + 20; // Adjust the range of green value
      const blue = Math.floor(Math.random() * 180) + 30; // Adjust the range of blue value
  
      const color = `rgb(${red}, ${green}, ${blue})`;
      backgroundColorArray.push(color);
    }
  
    return backgroundColorArray;
  }

  

  ngAfterViewInit() {

      const inputLOB = this.selectedValues.lob;
      const inputYear = this.selectedValues.year;

      

      this.dataService.fetchData().subscribe((data) => {
        this.dataRec = data;
      

        if(this.dataRec!=null){
          this.lobOptions = ["All",...new Set(data.map((item) => item.LOB))];
          this.yearOptions = ['All',...new Set(data.map(item => new Date(item.Date).getFullYear()))];  
          this.frequencyOptions = ["All", "Weekly", "Monthly", "Quarterly", "Half-Yearly", "Yearly"];
          
          console.log(inputLOB);
          console.log(inputYear);
          if (inputLOB == 'All' && inputYear == 'All') {
            console.log(this.dataRec);
            console.log(this.filteredData);
            this.automationOptionsUnique = [...new Set(this.dataRec.map((item) => item.Automation))];
            this.automationOptions = this.dataRec.map((item) => item.Automation);
          
            const counts = this.automationOptions.reduce((acc, option) => {
              acc[option] = (acc[option] || 0) + 1;
              return acc;
            }, {});
          
            this.automationCountArray = Object.values(counts);
          }
          else if (inputLOB == 'All') {
            this.filteredData = this.dataRec.filter(item => new Date(item.Date).getFullYear() == inputYear);
            this.automationOptionsUnique = [...new Set(this.filteredData.map((item) => item.Automation))];
            this.automationOptions = this.filteredData.map((item) => item.Automation);
          
            const counts = this.automationOptions.reduce((acc, option) => {
              acc[option] = (acc[option] || 0) + 1;
              return acc;
            }, {});
          
            this.automationCountArray = Object.values(counts);
          }
          else if(inputYear == 'All'){
            this.filteredData = this.dataRec.filter(item => item.LOB === inputLOB);
          this.automationOptionsUnique = [...new Set(this.filteredData.map((item) => item.Automation))];
          this.automationOptions = this.filteredData.map((item) => item.Automation);


          const counts = this.automationOptions.reduce((acc, option) => {
            acc[option] = (acc[option] || 0) + 1;
            return acc;
          }, {});
          
          this.automationCountArray = Object.values(counts);
          }
          else{
            this.filteredData = this.dataRec.filter(item => item.LOB === inputLOB && new Date(item.Date).getFullYear() == inputYear);
          this.automationOptionsUnique = [...new Set(this.filteredData.map((item) => item.Automation))];
          this.automationOptions = this.filteredData.map((item) => item.Automation);


          const counts = this.automationOptions.reduce((acc, option) => {
            acc[option] = (acc[option] || 0) + 1;
            return acc;
          }, {});
          
          this.automationCountArray = Object.values(counts);
          }
          

        }
        
      });


      const staticArray = [];
      setTimeout(() => {
        for (let i = 0; i < this.automationCountArray.length; i++) {
          staticArray[i] = this.automationCountArray[i];
        }
      }, 100);
      // console.log(staticArray);
    
      setTimeout(() => {
        var ctx = (
      document.getElementById('pieChart') as HTMLCanvasElement
    )?.getContext('2d');
    if (ctx) {
      this.backgroundColorArray = this.generateRandomColors();
      console.log(this.backgroundColorArray)

        var myChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: this.automationOptionsUnique.slice(0, 10),
            datasets: [
              {
                data: staticArray.slice(0, 10),
                backgroundColor: this.backgroundColorArray.slice(0, 10),
                borderWidth: 2,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: true,
                title: {
                  display: true,
                },
                labels: {
                  fontSize: 0
                },
              },
            },
          },
        });
      }}, 100); 
  }
}
