import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataSubject = new BehaviorSubject<any[]>([]);
 
  constructor( private http:HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums')
  }

   setData(data: any[]): void {
    this.dataSubject.next(data);
  }

   getData(): Observable<any[]> {
    return this.dataSubject.asObservable();
  }

 


}
