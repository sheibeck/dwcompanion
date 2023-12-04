
import { generateClient } from 'aws-amplify/api';
import { DataStore } from 'aws-amplify/datastore';
import { Character } from '@/models';
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
    
        for await (const character of characters.data.listCharacters.items) {
            const charProfession = await client.graphql({
                query: queries.getCharacterProfession,
                variables: {
                    id: character.characterCharacterProfessionId ?? ""
                }
            });

            const item = await charProfession.data.getCharacterProfession
            result.push(item);
        };
    }
    catch(ex) {
        console.error(ex);
    }

    return result;
}
