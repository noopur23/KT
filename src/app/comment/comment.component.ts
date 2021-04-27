import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store,State, select } from '@ngrx/store';
import { Comment } from '../comment.model';
import { ApiGetData , ApiSuccess } from '../store/comment.action';
import { rootState } from '../app.state';
import {initialState } from '../store/comment.reducer';
import { debounceTime, subscribeOn, take } from 'rxjs/operators';
import { getAllData, selectFilteredData } from '../store/comment.selectors';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment$ :Observable<rootState>;
  data$:Observable<Comment[]>;

  constructor(private store: Store<rootState>,private state:State<rootState>){}

  filtercomment(searchString){
    this.data$ = this.store.select(selectFilteredData,searchString).pipe(debounceTime(2000));
  }

  ngOnInit(): void {
    this.store.dispatch(new ApiGetData());
    this.data$ = this.store.select(getAllData);
  }
}
