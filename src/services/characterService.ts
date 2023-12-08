
import { generateClient } from 'aws-amplify/api';
import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';
import * as uuid from 'short-uuid';


const client = generateClient();

export const getCharactersWithProfessions = async(userId: string) => {
    const result: any = [];

    try {
        const characters = await client.graphql({ query: queries.listCharacters,
            variables: { 
                filter: {
                    userId: {
                        eq: userId
                    },
                    _deleted: {
                        ne: true
                    }
                } 
            } 
        });

        const charList: any = characters.data.listCharacters.items;
        charList.forEach((item: any) => {
            item = jsonCharacter(item)
        });

        return charList;
    }
    catch(ex) {
        console.error(ex);
    }

    return result;
}

export async function createNewCharacter(newCharacter: any) {
    
    try {
       
        newCharacter.id = uuid.generate();
        newCharacter = stringifyCharacter(newCharacter);

        const { data, errors } = await client.graphql({ query: mutations.createCharacter,
            variables: {
                input: newCharacter
            }
        });

        const character: any = data.createCharacter;
        return character;

        // const char = new Character({
        //     "userId": newCharacter.userId,
        //     "name": "Lorem ipsum dolor sit amet",
        //     "level": 1020,
        //     "xp": 1020,
        //     "armor": 1020,
        //     "hitPointsMax": 1020,
        //     "hitPointsCurrent": 1020,
        //     "coin": 1020,
        //     "loadMax": 1020,
        //     "loadCurrent": 1020,
        //     "isTemplate": true,
        //     "tags": [],
        //     "notes": [],
        //     "gear":  null,
        //     "startingMoves":  null,
        //     "advancedMovesTwoToTen":  null,
        //     "advancedMovesSixToTen":  null,
        //     "bonds":  null,
        //     "abilityScores":  null,
        //     "race":  null,
        //     "alignment":  null,
        //     "look":  null,
        //     "profession":  JSON.stringify(newCharacter),
        //     "spells":  null,
        // })

        // const result = await DataStore.save(char);
        // return result;
       
    }
    catch(ex) {
        console.error(ex);
        return null;
    }

}

// Fetch a single record by its identifier
export async function getCharacter(id: string) {
    const { data, errors } = await client.graphql({
        query: queries.getCharacter,
        variables: { id: id }
    });

    const character = data.getCharacter;
    return jsonCharacter(character);
}

export async function deleteCharacter(id: any) {
    try {
        const character = await getCharacter(id);
        const { data, errors } = await client.graphql({ query: mutations.deleteCharacter,
            variables: { 
                
                    input: {
                        id: character.id,
                        _version: character._version
                    }
                 
            } 
        });

        // const item = await DataStore.query(Character, id);
        // if (item) {
        //     const result = await DataStore.delete(item);
        //     return true;
        // }
        // else {
        //     return false;
        // }
    }
    catch(ex) {
        console.error(ex);
        return false;
    }
}

export function stringifyCharacter(character: any) {
    character.alignment = stringifyJson(character.alignment);
    character.profession = stringifyJson(character.profession);
    character.startingMoves = stringifyJson(character.startingMoves);
    character.look = stringifyJson(character.look);
    character.abilityScores = stringifyJson(character.abilityScores);
    character.advancedMovesTwoToTen = stringifyJson(character.advancedMovesTwoToTen);
    character.advancedMovesSixToTen = stringifyJson(character.advancedMovesSixToTen);
    character.bonds = stringifyJson(character.bonds);
    
    return character;
}

function stringifyJson(thing: object) {
    if(!thing) return null;
    return JSON.stringify(thing);
}

export function jsonCharacter(character: any) {
    character.alignment = formatJson(character.alignment);
    character.profession = formatJson(character.profession);
    character.startingMoves = formatJson(character.startingMoves);
    character.look = formatJson(character.look);
    character.abilityScores = formatJson(character.abilityScores);
    character.advancedMovesTwoToTen = formatJson(character.advancedMovesTwoToTen);
    character.advancedMovesSixToTen = formatJson(character.advancedMovesSixToTen);
    character.bonds = formatJson(character.bonds);
    
    return character;
}

function formatJson(text: any) {
    if(!text) return text;
    return JSON.parse(text);
}