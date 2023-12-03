
import { generateClient } from 'aws-amplify/api';
import { DataStore } from 'aws-amplify/datastore';
import { Character } from '@/models';
const client = generateClient();

export const getCharactersWithProfessions = async(userId: string) => {
    try {      
        const charList = [];
        const characters = await DataStore.query(Character, c => c.userId.eq(userId));
        for await (const character of characters) 
        {
            const [char, prof] = await Promise.all([(await character.CharacterProfession)?.Character, (await character.CharacterProfession)?.Profession]);
            charList.push({"Character": char, "Profession": prof });
        }
        return charList;
    }
    catch {
        return [];
    }
}
