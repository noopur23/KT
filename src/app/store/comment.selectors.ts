import { createSelector, Store, State } from '@ngrx/store';
import {rootState } from '../app.state';


export const getState = (state:any) => state;
export const getData = (state:rootState) => state.data;


export const getAllData = createSelector( getState,(state) => {return state.comment.data;} );

export const selectFilteredData = createSelector( getState,(state,searchString:string) => {
  return state.comment.data.filter(x => x.body.includes(searchString))});
