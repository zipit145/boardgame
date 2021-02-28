import { Action, createReducer, on } from '@ngrx/store';
import { draftCharacter, home }  from '../actions/characters.actions';
import { Character } from '../../models/character';

export const initialCharacterState: any = {
  characters: []
}

export interface CharacterState {
    characters: Character[]
}

export interface State {
  home: number
}
export const initialState: State = {
  home: 0,
}

const charactersReducer = createReducer(
    initialCharacterState,
    // on(draftCharacter, (state, {character}) => ({ characters: [...state.characters, {character}] })),
    on(draftCharacter, (state, {character}) => ({
        ...state,
        characters: [...state.characters, character] 
      })
    ),
  );
  const stateReducer = createReducer(
    initialState,
    on(draftCharacter, (state => ({ ...state, home: state.home+1 }))),
  )
  
  export function reducer(state: Character[] | undefined, action: Action) {
    return charactersReducer(state, action);
  }

  export function reducerTest(state: State | undefined, action: Action) {
    return stateReducer(state, action);
  }
