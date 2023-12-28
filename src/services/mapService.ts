import { generateClient } from 'aws-amplify/api';
import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';
import * as uuid from 'short-uuid';

const client = generateClient();

export async function createMap(map: any) {
    
  try {

      const newMap = JSON.parse(JSON.stringify(map));
      //don't mutate the original map;
      newMap.id = uuid.generate();
      newMap.locations = JSON.stringify(newMap.locations);
      
      const { data, errors } = await client.graphql({ query: mutations.createMap,
          variables: {
              input: newMap
          }
      });

      return newMap.id;
  }
  catch(ex) {
      console.error(ex);
      return null;
  }
}

export async function updateMap(map: any) {
    
  try {
      const updatedMap = JSON.parse(JSON.stringify(map));
      updatedMap.locations = JSON.stringify(updatedMap.locations);

      delete updatedMap['__typename'];
      delete updatedMap['updatedAt'];
      delete updatedMap['createdAt'];
      delete updatedMap['_lastChangedAt'];
      delete updatedMap['_deleted'];
      delete updatedMap['owner'];

      const { data, errors } = await client.graphql({ query: mutations.updateMap,
          variables: {
              input: updatedMap
          }
      });
      
      if (errors) {
          return null
      }

      return data.updateMap;
     
  }
  catch(ex) {
      console.error(ex);
      return null;
  }

}


export const getMaps = async(userId: string) => {
  const result: any = [];

  try {
      const maps = await client.graphql({ query: queries.listMaps,
          variables: { 
              filter: {
                  userId: {
                      eq: userId
                  }
              },
              limit: 1000,
          }
      });

      const mapList: any = maps.data.listMaps.items;
      return mapList;
  }
  catch(ex) {
      console.error(ex);
  }

  return result;
}



// Fetch a single record by its identifier
export async function getMap(id: string) {
  const { data, errors } = await client.graphql({
      query: queries.getMap,
      variables: { id: id },
      authMode: 'iam',
  });

  const map = data.getMap;
  if (map?.locations) {
    map.locations = JSON.parse(map.locations);
  }
  return map;
}

export async function deleteMap(id: any) {
  try {
      const map: any = await getMap(id);
      const { data, errors } = await client.graphql({ query: mutations.deleteMap,
          variables: { 
                  input: {
                      id: map.id
                  }
               
          } 
      });
  }
  catch(ex) {
      console.error(ex);
      return false;
  }
}
