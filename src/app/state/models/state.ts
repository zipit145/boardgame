import { Character } from '../../models/character';

export const initialCharacterState: CharacterState = {
    characters: []
}
export const initialState: State = {
    charactersState: initialCharacterState,
    phase: 'string',
}

export interface State {
    charactersState: CharacterState,
    phase: string,
}

export interface CharacterState {
    characters: Character[]
}