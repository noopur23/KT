import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { CommentService } from '../comment.service';
import { ApiGetData , ApiSuccess, API_GET_DATA } from './comment.action';
import { catchError, exhaustMap, map } from 'rxjs/operators';
//import { of } from 'rxjs';

@Injectable()
export class RootEffects {
  constructor(private actions$: Actions, private commentService: CommentService) { }

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(API_GET_DATA),
      exhaustMap(() =>
          this.commentService.getComments().pipe(
            map(response => new ApiSuccess(response))
          )
        )
      )
    );

    //constructor(private actions$: Actions, private apiCallsService: ApiCallsService) {}
  }
/*
  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiGetData),
      exhaustMap(action =>
        this.commentService.getComments().pipe(
          map(response => ApiSuccess({data:response}))
          ))
      )
    );


}
*/
