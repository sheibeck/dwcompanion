// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Source, Class, Spell, Spells, Gear, CharacterMove, Move, Bonds, Abilityscores, Race, Alignment, DiceType, Condition, ConditionTypes, Look, Character } = initSchema(schema);

export {
  User,
  Source,
  Class,
  Spell,
  Spells,
  Gear,
  CharacterMove,
  Move,
  Bonds,
  Abilityscores,
  Race,
  Alignment,
  DiceType,
  Condition,
  ConditionTypes,
  Look,
  Character
};