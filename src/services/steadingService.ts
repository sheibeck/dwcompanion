import OpenAI from "openai";
import { generateClient } from 'aws-amplify/api';
import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';
import * as uuid from 'short-uuid';

const client = generateClient();
const ASSISTANT_ID = 'asst_5k2lrxeTWUaaNZdrHbAEYFGa'; // ai assistant id

function getApiKey() {
  return localStorage.getItem('dungeonworldcompanion_apikey') ?? null;
}

export async function generateDungeonWorldSteading(steadingType: String) {

  const apiKey = getApiKey();
  if (!apiKey) {
    return "You must add your OpenAI Api Key to use this feature.";
  }

  const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });

  try {

    const thread = await openai.beta.threads.create();

    const message = await openai.beta.threads.messages.create(
      thread.id,
      {
        role: "user",
        content: `Create ${steadingType} Steading`
      }
    );

    const assitantProcess = await openai.beta.threads.runs.create(
      thread.id,
      { 
        assistant_id: ASSISTANT_ID
      }
    );

    // Poll for the assistant response until it's complete
    let response = null;
    while (response === null || response.status !== "completed") {
      response = await openai.beta.threads.runs.retrieve(thread.id, assitantProcess.id);
      if (response.status !== "completed") {
        // Wait for a while before polling again (adjust this as needed)
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds
      }
    }

    const messages: any = await openai.beta.threads.messages.list(
      thread.id
    );

    return messages.data[0].content[0].text.value;
  } catch (error: any) {
    throw new Error(`Failed to generate Dungeon World steadings: ${error.message}`);
  }
}


export const getSteadings = async(userId: string) => {
  const result: any = [];

  try {
      const steadings = await client.graphql({ query: queries.listSteadings,
          variables: { 
              filter: {
                  userId: {
                      eq: userId
                  }
              },
              limit: 1000,
          }
      });

      const steadingList: any = steadings.data.listSteadings.items;
      return steadingList;
  }
  catch(ex) {
      console.error(ex);
  }

  return result;
}


export async function createSteading(steading: any) {
    
  try {

      const newSteading = JSON.parse(JSON.stringify(steading));
      //don't mutate the original steading;
      newSteading.id = uuid.generate();
      
      const { data, errors } = await client.graphql({ query: mutations.createSteading,
          variables: {
              input: newSteading
          }
      });

      return newSteading.id;
  }
  catch(ex) {
      console.error(ex);
      return null;
  }
}

export async function updateSteading(steading: any) {
    
  try {
      const updatedSteading = JSON.parse(JSON.stringify(steading));
      delete updatedSteading['__typename'];
      delete updatedSteading['updatedAt'];
      delete updatedSteading['createdAt'];
      delete updatedSteading['_lastChangedAt'];
      delete updatedSteading['_deleted'];
      delete updatedSteading['owner'];

      const { data, errors } = await client.graphql({ query: mutations.updateSteading,
          variables: {
              input: updatedSteading
          }
      });
      
      if (errors) {
          return null
      }

      return data.updateSteading;
     
  }
  catch(ex) {
      console.error(ex);
      return null;
  }

}


// Fetch a single record by its identifier
export async function getSteading(id: string) {
  const { data, errors } = await client.graphql({
      query: queries.getSteading,
      variables: { id: id },
      authMode: 'iam',
  });

  const steading = data.getSteading;
  return steading;
}

export async function deleteSteading(id: any) {
  try {
      const steading: any = await getSteading(id);
      const { data, errors } = await client.graphql({ query: mutations.deleteSteading,
          variables: { 
                  input: {
                      id: steading.id
                  }
               
          } 
      });
  }
  catch(ex) {
      console.error(ex);
      return false;
  }
}
