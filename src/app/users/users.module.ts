import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule
  ],
  exports:[UserComponent]
})
export class UsersModule { }
