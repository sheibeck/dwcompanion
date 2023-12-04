
import { generateClient } from 'aws-amplify/api';
import * as queries from '@/graphql/queries';
import type { Profession } from '@/enums/profession';

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
            item.profession = formatJson(item.profession);
            item.startingMoves = formatJson(item.startingMoves);
            item.look = formatJson(item.look);
        });

        return charList;
    }
    catch(ex) {
        console.error(ex);
    }

    return result;
}

export const getMovesByProfession = async(profession: Profession) => {

    const moves: any = await client.graphql({ query: queries.listMoves,
            variables: { filter: {
                    profession: {
                        eq: profession
                    }
                } 
            } 
        });

    const moveList =  moves.data.listMoves.items;

    moveList.forEach((item: any) => {
        item.description = formatText(item.description);
    });

    return moveList;
};

function formatJson(text: any) {
    if(!text) return text;
    return JSON.parse(formatText(text));
}

function formatText(text: any) {
    if(!text) return text;
    return text.replaceAll("\\n", "<br />");
}
