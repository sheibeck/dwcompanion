import OpenAI from "openai";
import { generateClient } from 'aws-amplify/api';
import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';
import * as uuid from 'short-uuid';
import { getApiKey } from "./openAiService";

const client = generateClient();
const ASSISTANT_ID = 'asst_YKT1efTUEMyxgY9aZ6eiXsU9'; // ai assistant id

export async function generateDungeonWorldFront(frontType: String) {

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
        content: `Create ${frontType} Front`
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
      if (response.status === "failed") {
       throw new Error(response.last_error?.message ?? "openai request failed");
      }

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
    throw new Error(`Failed to generate Dungeon World fronts: ${error.message}`);
  }
}


export const getFronts = async(userId: string) => {
  const result: any = [];

  try {
      const fronts = await client.graphql({ query: queries.listFronts,
          variables: { 
              filter: {
                  userId: {
                      eq: userId
                  }
              },
              limit: 1000,
          }
      });

      const frontList: any = fronts.data.listFronts.items;
      return frontList;
  }
  catch(ex) {
      console.error(ex);
  }

  return result;
}

export const queryFronts = async(userId: string, query: string) => {
  const result: any = [];

  try {
      const fronts = await client.graphql({ query: queries.listFronts,
          variables: { 
              filter: {
                  userId: {
                      eq: userId
                  },
                  name: {
                    contains: query
                  }
              },
              limit: 1000,
          }
      });

      const frontList: any = fronts.data.listFronts.items;

      if (frontList.length > 0) {
        return frontList;
      } 
      else {
        return await getFronts(userId);
      }
      
  }
  catch(ex) {
      console.error(ex);
  }

  return result;
}


export async function createFront(front: any) {
    
  try {

      const newFront = JSON.parse(JSON.stringify(front));
      //don't mutate the original front;
      newFront.id = uuid.generate();
      
      const { data, errors } = await client.graphql({ query: mutations.createFront,
          variables: {
              input: newFront
          }
      });

      return newFront.id;
  }
  catch(ex) {
      console.error(ex);
      return null;
  }
}

export async function updateFront(front: any) {
    
  try {
      const updatedFront = JSON.parse(JSON.stringify(front));
      delete updatedFront['__typename'];
      delete updatedFront['updatedAt'];
      delete updatedFront['createdAt'];
      delete updatedFront['_lastChangedAt'];
      delete updatedFront['_deleted'];
      delete updatedFront['owner'];

      const { data, errors } = await client.graphql({ query: mutations.updateFront,
          variables: {
              input: updatedFront
          }
      });
      
      if (errors) {
          return null
      }

      return data.updateFront;
     
  }
  catch(ex) {
      console.error(ex);
      return null;
  }

}


// Fetch a single record by its identifier
export async function getFront(id: string) {
  const { data, errors } = await client.graphql({
      query: queries.getFront,
      variables: { id: id },
      authMode: 'iam',
  });

  const front = data.getFront;
  return front;
}

export async function deleteFront(id: any) {
  try {
      const front: any = await getFront(id);
      const { data, errors } = await client.graphql({ query: mutations.deleteFront,
          variables: { 
                  input: {
                      id: front.id
                  }
               
          } 
      });
  }
  catch(ex) {
      console.error(ex);
      return false;
  }
}
