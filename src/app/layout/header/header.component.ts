import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText:any
  displaySearch=true;

  constructor(
    private userService:UserService,
    private router:Router) {
}

  search(){
    this.userService.setData(this.searchText)
  }

  ngOnInit(): void {
      this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {
       this.displaySearch = event.urlAfterRedirects=='/users/list'?true:false;
      }
    });
    
  }

}
