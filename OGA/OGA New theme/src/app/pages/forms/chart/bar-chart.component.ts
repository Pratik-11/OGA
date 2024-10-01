import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js';
import { Input } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent {
  @Input() selectedValues: any;

  dataRec: any;
  filteredData: any;
  backgroundColorArray: string[];
  dateCountArray: number[] = [];
  dateLabelArray: any[] = [];
  inputAutomation: any;
  inputLOB: any;

  // generateRandomColors(): string[] {
  //   const backgroundColorArray: string[] = [];
  //   const optionsLength = this.automationOptionsUnique.length;
  
  //   for (let i = 0; i < optionsLength; i++) {
  //     const red = Math.floor(Math.random() * 180) + 30; // Adjust the range of red value
  //     const green = Math.floor(Math.random() * 180) + 20; // Adjust the range of green value
  //     const blue = Math.floor(Math.random() * 180) + 30; // Adjust the range of blue value
  
  //     const color = `rgb(${red}, ${green}, ${blue})`;
  //     backgroundColorArray.push(color);
  //   }
  
  //   return backgroundColorArray;
  // }

  constructor(private dataService: DataService) {}


  ngAfterViewInit() {

    this.inputLOB = this.selectedValues.lob;
    this.inputAutomation = this.selectedValues.automation;
    const inputFromDate = this.selectedValues.fromDate;
    const inputToDate = this.selectedValues.toDate;

    // this.inputLOB = "All";
    // this.inputAutomation = "All";
    // const inputFromDate = new Date("2020-12-20");
    // const inputToDate = new Date("2023-12-20");


    this.dataService.fetchData().subscribe((data) => {
      this.dataRec = data;
    

      if(this.dataRec!=null){
        
        if (this.inputLOB == 'All' && this.inputAutomation == 'All') {


          this.filteredData = this.dataRec.filter(item =>
            new Date(item.Date) >= inputFromDate &&
            new Date(item.Date) <= inputToDate
          );

          this.filteredData.sort((a, b) => {
            const dateA = new Date(a.Date);
            const dateB = new Date(b.Date);
          
            if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
              return 0; // Handle the case when the date values are invalid or undefined
            }
          
            return dateA.getTime() - dateB.getTime();
          });

          const uniqueDates = new Set(this.filteredData.map(item => item.Date));
          this.dateLabelArray = Array.from(uniqueDates);



          const counts = this.filteredData.reduce((acc, item) => {
            const date = item.Date; // Assuming the Date property exists in each item of filteredData
            acc[date] = (acc[date] || 0) + 1;
            return acc;
          }, {});
          
          this.dateCountArray = Object.values(counts);
        
          console.log(this.dataRec);
          console.log(this.filteredData);
          console.log(this.dateCountArray);
          console.log(this.dateLabelArray);

        }
        else if (this.inputLOB == 'All') {


          this.filteredData = this.dataRec.filter(item =>  
            item.Automation === this.inputAutomation &&
            new Date(item.Date) >= inputFromDate &&
            new Date(item.Date) <= inputToDate
          );

          this.filteredData.sort((a, b) => {
            const dateA = new Date(a.Date);
            const dateB = new Date(b.Date);
          
            if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
              return 0; // Handle the case when the date values are invalid or undefined
            }
          
            return dateA.getTime() - dateB.getTime();
          });

          const uniqueDates = new Set(this.filteredData.map(item => item.Date));
          this.dateLabelArray = Array.from(uniqueDates);



          const counts = this.filteredData.reduce((acc, item) => {
            const date = item.Date; // Assuming the Date property exists in each item of filteredData
            acc[date] = (acc[date] || 0) + 1;
            return acc;
          }, {});
          
          this.dateCountArray = Object.values(counts);
        
          console.log(this.dataRec);
          console.log(this.filteredData);
          console.log(this.dateCountArray);
          console.log(this.dateLabelArray);
        }
        else if(this.inputAutomation == 'All'){


          this.filteredData = this.dataRec.filter(item =>
            item.LOB === this.inputLOB &&
            new Date(item.Date) >= inputFromDate &&
            new Date(item.Date) <= inputToDate
          );

         this.filteredData.sort((a, b) => {
            const dateA = new Date(a.Date);
            const dateB = new Date(b.Date);
          
            if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
              return 0; // Handle the case when the date values are invalid or undefined
            }
          
            return dateA.getTime() - dateB.getTime();
          });

          const uniqueDates = new Set(this.filteredData.map(item => item.Date));
          this.dateLabelArray = Array.from(uniqueDates);



          const counts = this.filteredData.reduce((acc, item) => {
            const date = item.Date; // Assuming the Date property exists in each item of filteredData
            acc[date] = (acc[date] || 0) + 1;
            return acc;
          }, {});
          
          this.dateCountArray = Object.values(counts);
        
          console.log(this.dataRec);
          console.log(this.filteredData);
          console.log(this.dateCountArray);
          console.log(this.dateLabelArray);
        }
        else{
          this.filteredData = this.dataRec.filter(item =>
            item.LOB === this.inputLOB &&
            item.Automation === this.inputAutomation &&
            new Date(item.Date) >= inputFromDate &&
            new Date(item.Date) <= inputToDate
          );

          this.filteredData.sort((a, b) => {
            const dateA = new Date(a.Date);
            const dateB = new Date(b.Date);
          
            if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
              return 0; // Handle the case when the date values are invalid or undefined
            }
          
            return dateA.getTime() - dateB.getTime();
          });

          const uniqueDates = new Set(this.filteredData.map(item => item.Date));
          this.dateLabelArray = Array.from(uniqueDates);



          const counts = this.filteredData.reduce((acc, item) => {
            const date = item.Date; // Assuming the Date property exists in each item of filteredData
            acc[date] = (acc[date] || 0) + 1;
            return acc;
          }, {});
          
          this.dateCountArray = Object.values(counts);
        
          console.log(this.dataRec);
          console.log(this.filteredData);
          console.log(this.dateCountArray);
          console.log(this.dateLabelArray);

      }
      
    }});

    // console.log(this.selectedValues.lob) 
    // console.log(this.selectedValues.automation) 
    // console.log(this.selectedValues.frequency) 
    // console.log(this.selectedValues.fromDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })) 
    // console.log(this.selectedValues.toDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })) 
    
    setTimeout(() => {
    var ctx = (
      document.getElementById('barChart') as HTMLCanvasElement
    )?.getContext('2d');
    if (ctx) {
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels:this.dateLabelArray,
          datasets: [
            {
              label:" ",
            },
            {
              data: this.dateCountArray ,
              label: this.inputLOB.toString() + ' , ' + this.inputAutomation.toString(),
              backgroundColor: 'rgb(99, 106, 255)',
              borderWidth: 0,
            },
            {
              label:" ",
              
            },
          ],
        },
        options: {
          legend: {
            display: false, // Set display to true to show the legend
            labels: {
          },
        },
          scales: {
            xAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                },
                barPercentage: 1.0, // Adjust this value as desired (default is 0.9)
                categoryPercentage: 1.0, // Adjust this value as desired (default is 0.8)
                // barThickness: 30,
                // maxBarThickness: 30,
                ticks: {
                  minRotation: 65, // Rotate labels vertically
                  maxRotation: 65, // Rotate labels vertically
                  fontSize: 10, // Adjust the font size as desired
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                },
              },
            ],
          },
          plugins: {
            legend: {
              display: true,
              align: 'end',
            },
          },
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 0,
              bottom: 35,
            },
          },
        } as any,
      });
    }},100);
  }
}
