// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Spell, Gear, Move, Bond, AbilityScore, Race, Alignment, Look, Character } = initSchema(schema);

export {
  Spell,
  Gear,
  Move,
  Bond,
  AbilityScore,
  Race,
  Alignment,
  Look,
  Character
};