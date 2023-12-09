
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
            jsonCharacter(item)
        });

        return charList;
    }
    catch(ex) {
        console.error(ex);
    }

    return result;
}

export async function createNewCharacter(character: any) {
    
    try {
       
        //don't mutate the original character;
        character.id = uuid.generate();
        let newCharacter = JSON.parse(JSON.stringify(character));
        newCharacter = stringifyCharacter(newCharacter);

        const { data, errors } = await client.graphql({ query: mutations.createCharacter,
            variables: {
                input: newCharacter
            }
        });

        return newCharacter.id;
       
    }
    catch(ex) {
        console.error(ex);
        return null;
    }

}


export async function updateCharacter(character: any) {
    
    try {
       
        let updatedCharacter = JSON.parse(JSON.stringify(character));
        delete updatedCharacter['__typename'];
        delete updatedCharacter['updatedAt'];
        delete updatedCharacter['createdAt'];
        delete updatedCharacter['_lastChangedAt'];
        delete updatedCharacter['_deleted'];
        delete updatedCharacter['owner'];
        updatedCharacter = stringifyCharacter(updatedCharacter);

        const { data, errors } = await client.graphql({ query: mutations.updateCharacter,
            variables: {
                input: updatedCharacter
            }
        });
        
        if (errors) {
            return null
        }

        return jsonCharacter(data.updateCharacter);
       
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
        const character: any = await getCharacter(id);
        const { data, errors } = await client.graphql({ query: mutations.deleteCharacter,
            variables: { 
                    input: {
                        id: character.id,
                        _version: character._version
                    }
                 
            } 
        });
    }
    catch(ex) {
        console.error(ex);
        return false;
    }
}

function stringifyCharacter(character: any) {
    character.alignment = stringifyJson(character.alignment);
    character.profession = stringifyJson(character.profession);
    character.startingMoves = stringifyJson(character.startingMoves);
    character.look = stringifyJson(character.look);
    character.abilityScores = stringifyJson(character.abilityScores);
    character.advancedMovesTwoToTen = stringifyJson(character.advancedMovesTwoToTen);
    character.advancedMovesSixToTen = stringifyJson(character.advancedMovesSixToTen);
    character.bonds = stringifyJson(character.bonds);
    character.race = stringifyJson(character.race);
    character.gear = stringifyJson(character.gear);
    
    return character;
}

function stringifyJson(thing: any) {
    if(!thing) return null;

    delete thing['__typename'];
    delete thing['updatedAt'];
    delete thing['createdAt'];
    delete thing['_lastChangedAt'];
    delete thing['_deleted'];
    delete thing['owner'];

    return JSON.stringify(thing);
}

function jsonCharacter(character: any) {
    character.alignment = formatJson(character.alignment);
    character.profession = formatJson(character.profession);
    character.startingMoves = formatJson(character.startingMoves);
    character.look = formatJson(character.look);
    character.abilityScores = formatJson(character.abilityScores);
    character.advancedMovesTwoToTen = formatJson(character.advancedMovesTwoToTen);
    character.advancedMovesSixToTen = formatJson(character.advancedMovesSixToTen);
    character.bonds = formatJson(character.bonds);
    character.race = formatJson(character.race);
    character.gear = formatJson(character.gear);
    
    return character;
}

function formatJson(text: any) {
    if(!text) return text;
    return JSON.parse(text);
}