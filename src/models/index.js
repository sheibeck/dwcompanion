// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Source, CharacterClass, Class, Spell, CharacterSpell, CharacterGear, Gear, CharacterMove, Move, CharacterBond, Bond, CharacterAbilityScore, AbilityScore, CharacterRace, Race, CharacterAlignment, Alignment, DiceType, CharacterLook, Look, Character } = initSchema(schema);

export {
  User,
  Source,
  CharacterClass,
  Class,
  Spell,
  CharacterSpell,
  CharacterGear,
  Gear,
  CharacterMove,
  Move,
  CharacterBond,
  Bond,
  CharacterAbilityScore,
  AbilityScore,
  CharacterRace,
  Race,
  CharacterAlignment,
  Alignment,
  DiceType,
  CharacterLook,
  Look,
  Character
};