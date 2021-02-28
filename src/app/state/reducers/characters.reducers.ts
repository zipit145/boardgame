import { Action, createReducer, on } from '@ngrx/store';
import { draftCharacter, home }  from '../actions/characters.actions';
import { Character } from '../../models/character';

export const initialCharacterState: any = {
  characters: []
}

export interface CharacterState {
    characters: Character[]
}

const charactersReducer = createReducer(
    initialCharacterState,
    on(draftCharacter, (state, {character}) => ({
        ...state,
        characters: [...state.characters, character] 
      })
    ),
  );
  
  export function reducer(state: Character[] | undefined, action: Action) {
    return charactersReducer(state, action);
  }
