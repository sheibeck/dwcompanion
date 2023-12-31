
import { generateClient } from 'aws-amplify/api';
import * as queries from '@/graphql/queries';
import type { ProfessionType } from '@/enums/professionType';
import { capitalizeWords } from '@/services/utilsService';

const client = generateClient();

export const getProfessions = async() => {

    const { data, errors} = await client.graphql({ 
        query: queries.listProfessions, 
        variables: { limit: 1000 },
        authMode: 'iam',
    });

    const professions =  await data.listProfessions.items;

    function compareBy(a: any, b: any) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    }

    return professions.sort(compareBy);
}

export const getAbilityScores = async() => {

    const { data, errors} = await client.graphql({ 
        query: queries.listAbilityScores,
        authMode: 'iam',
    });

    return data.listAbilityScores.items.sort((a, b) => (a?.sortOrder ?? 0) - (b?.sortOrder ?? 0));
}

export const getProfessionByName = async(name: string) => {

    const result: any = await client.graphql({ 
        query: queries.listProfessions,
        variables: {
            filter: {
                name: {
                    eq: capitalizeWords(name)
                }
            },
            limit: 1000,
        },
        authMode: 'iam',
    });

    const professsions =  await result.data.listProfessions.items;

    function compareByName(a: any, b: any) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    }

    return professsions.sort(compareByName);
}


export const getBondsByProfession = async(profession: ProfessionType) => {

    const { data } = await client.graphql({ query: queries.listBonds,
            variables: { 
                filter: {
                    profession: {
                        eq: capitalizeWords(profession)
                    }
                },
                limit: 1000,
            },
            authMode: 'iam',
        });

    return data.listBonds.items;
}

export const getMovesByProfession = async(profession: ProfessionType) => {

    const { data } = await client.graphql({ query: queries.listMoves,
            variables: { filter: {
                    profession: {
                        eq: capitalizeWords(profession)
                    }
                },
                limit: 1000, 
            },
            authMode: 'iam',
        });

    return await data.listMoves.items;
}

export const getLooksByProfession = async(profession: ProfessionType) => {

    const { data } = await client.graphql({ query: queries.listLooks,
            variables: { filter: {
                    profession: {
                        eq: capitalizeWords(profession)
                    }
                } ,
                limit: 1000,
            },
            authMode: 'iam', 
        });

    return data.listLooks.items;
}

export const getAlignmentsByProfession = async(profession: ProfessionType) => {

    const { data, errors }: any = await client.graphql({ query: queries.listAlignments,
            variables: { filter: {
                    profession: {
                        eq: capitalizeWords(profession)
                    }
                },
                limit: 1000,
            },
            authMode: 'iam',
        });

    return data.listAlignments.items;
}


export const getRaceByProfession = async(profession: ProfessionType) => {

    const { data, errors }: any = await client.graphql({ query: queries.listRaces,
            variables: { 
                filter: {
                    or: [{ profession: { eq: capitalizeWords(profession) } }, { profession: { eq: 'Any' } }]
                },
                limit: 1000,
            },
            authMode: 'iam',
        });

    return data.listRaces.items;
}


export const getStartingGearByProfession = async(profession: ProfessionType) => {

    const { data, errors }: any = await client.graphql({ query: queries.listGears,
            variables: { 
                filter: {
                    and: [{ profession: { eq: capitalizeWords(profession) } }, { isStartingGear: { eq: true } }]
                },
                limit: 1000,
            },
            authMode: 'iam',
        });

    return data.listGears.items;
}


