import { Action, createAction, props } from '@ngrx/store';
import {Comment} from '../comment.model'


const API_GET_DATA = '[Comment] API Get Data';
const API_ERROR_ACTION = '[Comment] API Error';
const API_SUCCESS_ACTION = '[Comment] API Success';

export const ApiGetData = createAction(API_GET_DATA);
export const ApiSuccess = createAction(API_SUCCESS_ACTION, props<{ data: any }>());
