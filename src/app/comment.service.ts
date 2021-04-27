
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {Comment} from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  //private url = "https://jsonplaceholder.typicode.com/comments";
  private url = 'http://localhost:3000/comments';

  getComments() {
    //const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    //const options = {headers};
    return this.http.get(this.url);
    /*.pipe(
    //return this.http.get(this.url).pipe(
      map((response: Response) => response),
      catchError(err => {
        console.log(err);
        return of([]);
      })

  );*/
  }

  constructor (private http:HttpClient){}
}
