import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {
  data:any; 
  titlesData:any
  id:any

  constructor(
    private activatedRoute:ActivatedRoute
  ) { }

  seenTitle(titleId:any){
    let index=null;
   index=this.data.findIndex((element:any) =>element.id === titleId)
   this.data[index].seen=true;
   localStorage.setItem('users',JSON.stringify(this.data));
  }


   getTitles(){
     this.titlesData=this.data.filter((ele:any)=> {return ele.userId===this.id});
     this.titlesData.sort((a:any,b:any)=> a.title.localeCompare(b.title))

   }
  

  ngOnInit(): void {
    let localData :any=localStorage.getItem('users')
    this.data=JSON.parse(localData)
    this.activatedRoute.params.subscribe(params => {
      this.id=Number(params['id'])
      if(this.id){
        this.getTitles()
      }
    });
  }

}
