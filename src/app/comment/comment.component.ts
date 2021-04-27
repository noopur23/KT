import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store,State, select } from '@ngrx/store';
import { Comment } from '../comment.model';
import { ApiGetData , ApiSuccess } from '../store/comment.action';
import { rootState } from '../app.state';
import {initialState } from '../store/comment.reducer';
import { subscribeOn, take } from 'rxjs/operators';
import { getAllData, selectFilteredData } from '../store/comment.selectors';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment$ :Observable<rootState>;
  //data:Comment[] = [];
  //data:Comment[];
  data$:Observable<Comment[]>;

  constructor(private store: Store<rootState>,private state:State<rootState>){
    //this.data$ = of(this.state.getValue().comment.data);
  }

  filtercomment(searchString){
   // this.data$ = of(this.state.getValue().comment.data);
   // console.log(searchString);
   // this.data$ = this.store.select(getFilter,searchString);
   // this.data$.subscribe(s => console.log(s));
  }

  ngOnInit(): void {
    this.store.dispatch(new ApiGetData());
    this.data$ = this.store.select(getAllData);
    //this.data$ = of(this.state.getValue().comment.data);

    this.data$.subscribe(s=>console.log(s));
  }
}


