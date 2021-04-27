import { Action, createAction, props } from '@ngrx/store';
import {Comment} from '../comment.model'


export class ApiGetData implements Action {
  public readonly type = API_GET_DATA;
}
export class ApiSuccess implements Action {
  public readonly type = API_SUCCESS_ACTION;
  constructor(public payload: any ) {}
}

export type ActionTypes = ApiGetData | ApiSuccess;

export const API_GET_DATA = '[Comment] API Get Data';
export const API_ERROR_ACTION = '[Comment] API Error';
export const API_SUCCESS_ACTION = '[Comment] API Success';

// this will be dispatched from some component or service
//export const ApiGetData = createAction(API_GET_DATA);
//export const FilterData = createAction(FILTER_DATA, props<{ searchString: string }>());
// these will be dispatched by the Effect result
//export const ApiError = createAction(API_ERROR_ACTION, props<{ error: any }>());
//export const ApiSuccess = createAction(API_SUCCESS_ACTION, props<{ data: any }>());
