import { createReducer, on, Action, ActionType } from '@ngrx/store';
import { rootState } from '../app.state';
import {Comment} from '../comment.model';
import {ActionTypes,API_GET_DATA,API_SUCCESS_ACTION} from './comment.action';

export const initialState: rootState = {
  data : []
};

  export const commentReducer = (state = initialState,action: ActionTypes) => {
    switch(action.type) {
      case API_GET_DATA:
      {
        return state;
      }
      case API_SUCCESS_ACTION:
      {
        let newstate = {data: action.payload};
        return newstate;
      }
      default:
        return state;
    }
  };
