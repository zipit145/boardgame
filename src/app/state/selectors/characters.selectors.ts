import { createSelector } from '@ngrx/store';
import { Character } from '../../models/character';
import { CharacterState } from '../models/state';

//TODO better selectors
 
export const selectCharacters = (state: any) => state.state.characters;