import { generateClient } from 'aws-amplify/api';
import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';
import * as uuid from 'short-uuid';
import type { Campaign } from '@/types/types';

const client = generateClient();

const parseCampaign = (raw: any): Campaign | null => {
  if (!raw || !raw.userId || !raw.id || !raw.name) return null;

  return {
    id: raw.id,
    userId: raw.userId,
    name: raw.name,
    description: raw.description ?? '',
    characterIds: raw.characterIds?.filter(Boolean) ?? [],
    frontIds: raw.frontIds?.filter(Boolean) ?? [],
    mapIds: raw.mapIds?.filter(Boolean) ?? [],
    steadingIds: raw.steadingIds?.filter(Boolean) ?? [],
    sessions: raw.sessions ?? [],
    createdAt: raw.createdAt,
    updatedAt: raw.updatedAt,
    owner: raw.owner
  };
};

export const getCampaigns = async (userId: string): Promise<Campaign[]> => {
  try {
    const { data } = await client.graphql({
      query: queries.listCampaigns,
      variables: {
        filter: { userId: { eq: userId } },
        limit: 1000
      }
    });

    const rawItems = (data as any)?.listCampaigns?.items ?? [];
    return rawItems.map(parseCampaign).filter(Boolean) as Campaign[];
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    return [];
  }
};

export const getCampaign = async (id: string): Promise<Campaign | null> => {
  try {
    const { data } = await client.graphql({
      query: queries.getCampaign,
      variables: { id }
    });

    return parseCampaign((data as any)?.getCampaign);
  } catch (error) {
    console.error('Error fetching campaign:', error);
    return null;
  }
};

export const createCampaign = async (campaign: Omit<Campaign, 'id'>): Promise<Campaign | null> => {
  try {
    const input = {
      id: uuid.generate(),
      ...campaign
    };

    const { data, errors } = await client.graphql({
      query: mutations.createCampaign,
      variables: { input }
    });

    if (errors?.length) {
      console.error('GraphQL error(s):', errors);
      return null;
    }

    return parseCampaign((data as any)?.createCampaign);
  } catch (error) {
    console.error('Error creating campaign:', error);
    return null;
  }
};

export const updateCampaign = async (id: string, updates: Partial<Campaign>): Promise<boolean> => {
  try {
    const cleanedInput = { ...updates };

    // Strip unwanted fields from campaign-level properties
    delete (cleanedInput as any).createdAt;
    delete (cleanedInput as any).updatedAt;
    delete (cleanedInput as any).owner;
    delete (cleanedInput as any).__typename;

    // 🧼 Clean up sessions array (remove any unexpected fields)
    if (cleanedInput.sessions) {
      cleanedInput.sessions = cleanedInput.sessions.map((s: any) => ({
        id: s.id,
        title: s.title,
        date: s.date,
        notes: s.notes,
      }));
    }

    const input = {
      id,
      ...cleanedInput,
    };

    await client.graphql({
      query: mutations.updateCampaign,
      variables: { input },
    });

    return true;
  } catch (error) {
    console.error('Error updating campaign:', error);
    return false;
  }
};


export const deleteCampaign = async (id: string): Promise<boolean> => {
  try {
    await client.graphql({
      query: mutations.deleteCampaign,
      variables: { input: { id } }
    });

    return true;
  } catch (error) {
    console.error('Error deleting campaign:', error);
    return false;
  }
};
