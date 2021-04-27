import { createSelector, Store, State } from '@ngrx/store';
import {rootState } from '../app.state';
import {Comment} from '../comment.model';
//import { map } from 'rxjs/operators';

export const getState = (state:any) => state;
export const getData = (state:rootState) => state.data;


export const getAllData = createSelector( getState,(state) => {return state.comment.data;} );

export const selectFilteredData = createSelector( getState,(state,searchString:string) => {
  return state.comment.data.filter(x => x.body.includes(searchString))});
    /*let newState = [];
      state.data.forEach(comment => {
        if (comment.body.includes(searchString))
          newState.push(comment);
      });
      return newState
    }*/


export const getFilter = createSelector(getData, (state,searchString )=> {return state.data.filter(x => x.includes(searchString))});
/*
export const getStateData = (state: rootState) => state.data;

export const selectFilteredData = createSelector(
  getStateData,
  (state: rootState,searchString) => state.data.map(s => s.body.includes(searchString))
);
*/
