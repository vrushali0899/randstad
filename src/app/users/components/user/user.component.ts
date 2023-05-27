import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

Router
 interface Item {
  userId: number;
  id: number;
  title: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

groupedUsers:{ [userId: number]: Item[] } = {};
usersData:Array<any>=[];

  constructor(
    private service:UserService,
    private router:Router) { }

 
  getUserData(){
    let localData:any=localStorage.getItem('users');
    localData=JSON.parse(localData)
    if(!localData){
      this.service.getUsers().subscribe((data:any)=>{
      this.usersData=data;
      this.usersData.forEach((ele:any)=>ele['seen']=false);
      localStorage.setItem("users",JSON.stringify(this.usersData))
      this.groupById(this.usersData);
      })
    }else{
      this.usersData=localData;
      this.groupById(this.usersData);
    }
   
  }

  groupById(data:any){
    this.groupedUsers={}
    let groups:{ [userId: number]: Item[] } = {};
    data.forEach((item:any) => {
      if (!groups[item?.userId]) {
        groups[item?.userId] = [];
      }
      groups[item?.userId].push(item);
    });
    this.groupedUsers = groups;
  }


  filterData(searchText:any){
    let filterData=this.usersData.filter((ele)=>ele.title.includes(searchText));
    this.groupById(filterData)
  }

  count(items:any){
    let seenItems=0;
    items.map((ele:any)=>{
      if(ele.seen==false){
      seenItems++
      }
    })
    
    return seenItems;
  }
  
 

  ngOnInit(): void {
     this.getUserData();
      this.service.getData().subscribe((data:any)=>{
     if(data.length>0){
      this.filterData(data)
     }else{
      this.getUserData()
     }
    });
  }

}
