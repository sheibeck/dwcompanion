
import { generateClient } from 'aws-amplify/api';
import * as queries from '@/graphql/queries';

const client = generateClient();

export const getCharactersWithProfessions = async(userId: string) => {
    const result: any = [];

    try {
        const characters = await client.graphql({ query: queries.listCharacters,
            variables: { filter: {
                    userId: {
                        eq: userId
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