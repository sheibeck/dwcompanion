
import { generateClient } from 'aws-amplify/api';
import * as queries from '@/graphql/queries';
import type { Profession } from '@/enums/profession';

const client = generateClient();

export const getProfessions = async() => {

    const result: any = await client.graphql({ query: queries.listProfessions });

    const professsions =  await result.data.listProfessions.items;

    function compareByName(a: any, b: any) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    }

    return professsions.sort(compareByName);
}

export const getBondsByProfession = async(profession: Profession) => {

    const result: any = await client.graphql({ query: queries.listBonds,
            variables: { filter: {
                    profession: {
                        eq: profession
                    }
                } 
            } 
        });

    const bonds =  await result.data.listBonds.items;
    return bonds;
}

export const getMovesByProfession = async(profession: Profession) => {

    const result: any = await client.graphql({ query: queries.listMoves,
            variables: { filter: {
                    profession: {
                        eq: profession
                    }
                } 
            } 
        });

    const moves =  await result.data.listMoves.items;
    return moves;
}

