import { Action, createReducer, on } from '@ngrx/store';
import { draftCharacter }  from '../actions/characters.actions';
import { Character } from '../../models/character';

export const initialCharacterState: Character[] = []
export interface CharacterState {
    characters: Character[]
}


const charactersReducer = createReducer(
    initialCharacterState,
    on(draftCharacter, (state, {character}) => ({ ...state, character })),
  );
  
  export function reducer(state: Character[] | undefined, action: Action) {
    return charactersReducer(state, action);
  }
