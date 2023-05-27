import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserService } from 'src/app/users/services/user.service';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText:any
  displaySearch=false;

  constructor(
    private userService:UserService,
    private acRoute:ActivatedRoute,
    private router:Router,
    private readonly location: Location) {
}

  search(){
    this.userService.setData(this.searchText)
    //console.log(this.searchText)
  
  }

  ngOnInit(): void {
   
      this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {
       this.displaySearch = event.url==='/users/list'
       console.log(event);
      }
    });
    
  }

}
