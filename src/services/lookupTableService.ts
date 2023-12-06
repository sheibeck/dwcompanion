
import { generateClient } from 'aws-amplify/api';
import * as queries from '@/graphql/queries';
import type { Profession } from '@/enums/profession';

const client = generateClient();

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

