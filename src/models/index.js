// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Profession, Spell, Gear, Move, Bond, AbilityScore, Race, Alignment, Look, Character } = initSchema(schema);

export {
  Profession,
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