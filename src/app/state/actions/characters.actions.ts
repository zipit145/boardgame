import { createAction, props } from '@ngrx/store';
import { Character } from '../../models/character';

export const draftCharacter = createAction(
  '[characters] draftCharacter',
  props<{ character: Character }>()
);

export const home = createAction(
  '[characters] draftCharacter',
);