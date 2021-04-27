
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {Comment} from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = "https://jsonplaceholder.typicode.com/comments";
  //private url = 'http://localhost:3000/comments';

  getComments() {
    return this.http.get(this.url);
  }

  constructor (private http:HttpClient){}
}
