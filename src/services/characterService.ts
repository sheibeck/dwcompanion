
import { generateClient } from 'aws-amplify/api';
import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';
import { Profession } from '@/enums/profession';
import * as uuid from 'short-uuid';

const client = generateClient();

export const getCharactersWithProfessions = async(userId: string) => {
    const result: any = [];

    try {
        // const characters = await client.graphql({ query: queries.listCharacters,
        //     variables: { 
        //         filter: {
        //             userId: {
        //                 eq: userId
        //             }
        //         } 
        //     } 
        // });

        // const charList: any = characters.data.listCharacters.items;
        // charList.forEach((item: any) => {
        //     item = jsonCharacter(item)
        // });

        // return charList;
        return null
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

        const result = await client.graphql({ query: mutations.createCharacter,
            variables: {
                input: newCharacter
            },
        });

        const character: any = result.data.createCharacter;
        return character;
       
    }
    catch(ex) {
        console.error(ex);
    }

}

export async function deleteCharacter(id: any) {
    const { data, errors } = await client.graphql({ query: mutations.deleteCharacter,
        variables: {
            input: {
                id: id
            }
        },
    });

    if (errors) {
        return false;
    }

    return true;
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