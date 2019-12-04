import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  on,
  createAction,
  createReducer,
  UPDATE
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer } from '@ngrx/router-store';

export const upAction = createAction('UP');

export interface State {

}

/* const state = { y: Date.now() };
const xReducer = createReducer(
  state,
  on(upAction, (state)=> ({ ...state, cd: Date.now() }))
)
 */
export const reducers: ActionReducerMap<State> = {
  // x: xReducer
  router: routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
