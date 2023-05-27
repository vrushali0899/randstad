import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TitlesComponent } from "./titles/titles.component";
const routes: Routes = [
 
  {
    path: "list/:id",
    component:TitlesComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitlesRoutingModule {}
