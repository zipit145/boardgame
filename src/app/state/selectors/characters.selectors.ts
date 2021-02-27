import { createSelector } from '@ngrx/store';
import { Character } from '../../models/character';
import { CharacterState } from '../reducers/characters.reducers';
 
export interface FeatureState {
  counter: number;
}
 
export interface AppState {
  feature: FeatureState;
}
 
export const selectCharacters = (state: CharacterState) => state.characters;

// export const selectVisibleBooks = createSelector(
//     selectCharacters,
// );