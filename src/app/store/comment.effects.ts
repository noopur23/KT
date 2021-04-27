import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { CommentService } from '../comment.service';
import { ApiGetData , ApiSuccess,  } from './comment.action';
import { catchError, exhaustMap, map } from 'rxjs/operators';
//import { of } from 'rxjs';

@Injectable()
export class RootEffects {
  constructor(private actions$: Actions, private commentService: CommentService) { }

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiGetData),
      exhaustMap(() =>
          this.commentService.getComments().pipe(
            map(response => ApiSuccess({data : response}))
          )
        )
      )
    );
  }
