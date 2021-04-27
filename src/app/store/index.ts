import { ApiError, ApiSuccess, ApiGetData } from './comment.action';
import { RootEffects } from './comment.effects';
import { commentReducer } from './comment.reducer';
//import { getStateError, getStateSelectedData } from './comment.selectors';

export const fromRoot = {
  ApiError, ApiSuccess, ApiGetData, commentReducer, RootEffects};
