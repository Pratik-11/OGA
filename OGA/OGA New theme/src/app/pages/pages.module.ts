import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
// import { DataService } from "./data.service";

@NgModule({
  imports: [PagesRoutingModule, ThemeModule, NbMenuModule],
  declarations: [PagesComponent],
  // providers: [DataService]
})
export class PagesModule {}
