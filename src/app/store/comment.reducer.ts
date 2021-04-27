import { createReducer, on, Action, ActionType } from '@ngrx/store';
import { rootState } from '../app.state';
import {Comment} from '../comment.model';
import {ApiGetData,ApiSuccess} from './comment.action';

export const initialState: rootState = {
  data : []
};

export const commentReducer = createReducer(
  initialState,
  on(ApiGetData, (state) => ({data : state.data})),
  on(ApiSuccess, (state,action) => ({data : action.data})));
