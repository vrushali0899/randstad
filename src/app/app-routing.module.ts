import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./layout/header/header.component";

const routes: Routes = [
  {
    path:"",
    redirectTo:"/users/list",
    pathMatch: "full",
  },
{ 
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersModule),
  },
  {
    path: "titles",
    loadChildren: () =>
      import("./titles/titles.module").then((m) => m.TitlesModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
