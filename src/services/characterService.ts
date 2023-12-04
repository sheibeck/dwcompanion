
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
            item.profession = JSON.parse(item.profession);
        });

        return charList;
    }
    catch(ex) {
        console.error(ex);
    }

    return result;
}
