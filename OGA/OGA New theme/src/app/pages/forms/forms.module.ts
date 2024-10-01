import { NgModule } from "@angular/core";
import { FormsModule as ngFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from "@nebular/theme";

import { ThemeModule } from "../../@theme/theme.module";
import { FormsRoutingModule } from "./forms-routing.module";
import { FormsComponent } from "./forms.component";
import { FormInputsComponent } from "./form-inputs/form-inputs.component";
import { Form1Component } from "./form1/form1.component";
import { BarChartComponent } from "./chart/bar-chart.component";
import { Form2Component } from "./form2/form2.component";
import { TableComponent } from "./table/table.component";
import { NgxEchartsModule } from "ngx-echarts";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartsModule } from "ng2-charts";
import { PieChartComponent } from "./piechart/pie-chart.component";

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartsModule,
  ],
  declarations: [
    FormsComponent,
    FormInputsComponent,
    Form1Component,
    BarChartComponent,
    Form2Component,
    TableComponent,
    PieChartComponent,
  ],
})
export class FormsModule {}
