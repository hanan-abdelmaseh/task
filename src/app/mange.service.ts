import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangeService {
  //data:any = [];
  constructor(private http: HttpClient ) { }
  getData():Observable<any>{
    return  this.http.get('https://jsonplaceholder.typicode.com/posts')

  }
  getPost():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
  addNewPost(inputValue:any):Observable<any>{
    return this.http.post('https://jsonplaceholder.typicode.com/posts',inputValue )
  }
}
