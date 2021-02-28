import { Action, createReducer, on } from '@ngrx/store';
import { draftCharacter, home }  from '../actions/characters.actions';
import { initialCharacterState, CharacterState } from '../models/state';
import { Character } from '../../models/character';


const charactersReducer = createReducer(
    initialCharacterState,
    on(draftCharacter, (state, {character}) => ({
        ...state,
        characters: [...state.characters, character] 
      })
    ),
  );
  
  export function reducer(state: CharacterState | undefined, action: Action) {
    return charactersReducer(state, action);
  }
