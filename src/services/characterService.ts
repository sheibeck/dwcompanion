import { generateClient } from 'aws-amplify/api';
import * as uuid from 'short-uuid';
import type { Character } from '@/types/types';
import {
  getCharacter as getCharacterQuery,
  listCharacters as listCharactersQuery
} from '@/graphql/queries';
import {
  createCharacter as createCharacterMutation,
  updateCharacter as updateCharacterMutation,
  deleteCharacter as deleteCharacterMutation
} from '@/graphql/mutations';

const client = generateClient();

const parseCharacterJSONFields = (character: any): Character => {
  return {
    ...character,
    gear: character.gear ? JSON.parse(character.gear) : [],
    startingMoves: character.startingMoves ? JSON.parse(character.startingMoves) : [],
    advancedMovesTwoToTen: character.advancedMovesTwoToTen ? JSON.parse(character.advancedMovesTwoToTen) : [],
    advancedMovesSixToTen: character.advancedMovesSixToTen ? JSON.parse(character.advancedMovesSixToTen) : [],
    bonds: character.bonds ? JSON.parse(character.bonds) : [],
    abilityScores: character.abilityScores ? JSON.parse(character.abilityScores) : [],
    race: character.race ? JSON.parse(character.race) : [],
    alignment: character.alignment ? JSON.parse(character.alignment) : [],
    look: character.look ? JSON.parse(character.look) : [],
    profession: character.profession ? JSON.parse(character.profession) : [],
    spells: character.spells ? JSON.parse(character.spells) : []
  };
};

const stringifyCharacterJSONFields = (character: Character): Partial<Character> => {
  const { id, ...rest } = character;
  return {
    ...rest,
    gear: JSON.stringify(character.gear || []),
    startingMoves: JSON.stringify(character.startingMoves || []),
    advancedMovesTwoToTen: JSON.stringify(character.advancedMovesTwoToTen || []),
    advancedMovesSixToTen: JSON.stringify(character.advancedMovesSixToTen || []),
    bonds: JSON.stringify(character.bonds || []),
    abilityScores: JSON.stringify(character.abilityScores || []),
    race: JSON.stringify(character.race || []),
    alignment: JSON.stringify(character.alignment || []),
    look: JSON.stringify(character.look || []),
    profession: JSON.stringify(character.profession || []),
    spells: JSON.stringify(character.spells || [])
  };
};

export const getCharacters = async (): Promise<Character[]> => {
  try {
    const { data } = await client.graphql({ query: listCharactersQuery });
    const rawItems = (data as any)?.listCharacters?.items || [];
    return rawItems.filter((item: any) => item != null).map(parseCharacterJSONFields);
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};

export const getCharacter = async (id: string): Promise<Character | null> => {
  try {
    const { data } = await client.graphql({ query: getCharacterQuery, variables: { id } });
    return parseCharacterJSONFields(data.getCharacter);
  } catch (error) {
    console.error('Error fetching character:', error);
    return null;
  }
};

export const createCharacter = async (character: Omit<Character, 'id'>): Promise<Character | null> => {
  try {
    const id = uuid.generate();
    const input = { id, ...stringifyCharacterJSONFields(character as Character) };
    const { data } = await client.graphql({ query: createCharacterMutation, variables: { input } });
    return parseCharacterJSONFields(data.createCharacter);
  } catch (error) {
    console.error('Error creating character:', error);
    return null;
  }
};

export const createNewCharacter = async (character: Partial<Character>): Promise<Character | null> => {
  try {
    const baseCharacter: Character = {
      id: uuid.generate(),
      name: character.name || 'New Character',
      level: character.level || 1,
      xp: character.xp || 0,
      armor: character.armor || 0,
      hitPointsMax: character.hitPointsMax || 0,
      hitPointsCurrent: character.hitPointsCurrent || 0,
      coin: character.coin || 0,
      loadMax: character.loadMax || 0,
      loadCurrent: character.loadCurrent || 0,
      isTemplate: character.isTemplate || false,
      tags: character.tags || [],
      notes: character.notes || [],
      gear: character.gear || [],
      startingMoves: character.startingMoves || [],
      advancedMovesTwoToTen: character.advancedMovesTwoToTen || [],
      advancedMovesSixToTen: character.advancedMovesSixToTen || [],
      bonds: character.bonds || [],
      abilityScores: character.abilityScores || [],
      race: character.race || [],
      alignment: character.alignment || [],
      look: character.look || [],
      profession: character.profession || [],
      spells: character.spells || [],
      userId: character.userId || ''
    };

    const newCharacter = {
      id: baseCharacter.id,
      ...stringifyCharacterJSONFields(baseCharacter)
    };

    const { data } = await client.graphql({ query: createCharacterMutation, variables: { input: newCharacter } });
    return parseCharacterJSONFields(data.createCharacter);
  } catch (error) {
    console.error('Error creating new character:', error);
    return null;
  }
};

export const updateCharacter = async (id: string, updates: Partial<Character>): Promise<boolean> => {
  try {
    const updated = stringifyCharacterJSONFields({ ...updates, id } as Character);
    await client.graphql({ query: updateCharacterMutation, variables: { input: { id, ...updated } } });
    return true;
  } catch (error) {
    console.error('Error updating character:', error);
    return false;
  }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  try {
    await client.graphql({ query: deleteCharacterMutation, variables: { input: { id } } });
    return true;
  } catch (error) {
    console.error('Error deleting character:', error);
    return false;
  }
};

export const getCharactersWithProfessions = async (userId: string): Promise<Character[]> => {
  try {
    const characters = await getCharacters();
    return characters.filter((c) => c.userId === userId && c.profession);
  } catch (error) {
    console.error('Error filtering characters with professions:', error);
    return [];
  }
};
