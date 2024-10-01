import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FormsComponent } from "./forms.component";
import { FormInputsComponent } from "./form-inputs/form-inputs.component";

const routes: Routes = [
  {
    path: "",
    component: FormsComponent,
    children: [
      {
        path: "PROD",
        component: FormInputsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
