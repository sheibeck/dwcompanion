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
    gm_notes: raw.gm_notes,
    createdAt: raw.createdAt,
    updatedAt: raw.updatedAt,
    owner: raw.owner,
  };
};

export const getCampaigns = async (userId: string): Promise<Campaign[] | string> => {
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
    return 'Error fetching campaigns';
  }
};

export const getCampaign = async (id: string): Promise<Campaign | string> => {
  try {
    const { data } = await client.graphql({
      query: queries.getCampaign,
      variables: { id }
    });

    const parsed = parseCampaign((data as any)?.getCampaign);
    if (!parsed) return 'Failed to parse campaign';

    return parsed;
  } catch (error) {
    console.error('Error fetching campaign:', error);
    return 'Error fetching campaign';
  }
};

export const createCampaign = async (campaign: Omit<Campaign, 'id'>): Promise<Campaign | string> => {
  try {
    const input = {
      id: uuid.generate(),
      ...campaign
    };

    const result = await client.graphql({
      query: mutations.createCampaign,
      variables: { input }
    });

    const data = (result as any)?.data;
    const errors = (result as any)?.errors;

    if (errors?.length) {
      console.error('GraphQL error(s):', errors);
      return errors[0]?.message || 'Unknown error creating campaign';
    }

    const createdCampaign = parseCampaign(data?.createCampaign);
    if (!createdCampaign) return 'Failed to parse created campaign';

    return createdCampaign;
  } catch (error) {
    console.error('Error creating campaign:', error);
    return 'Error creating campaign';
  }
};

export const updateCampaign = async (id: string, updates: Partial<Campaign>): Promise<boolean | string> => {
  try {
    const cleanedInput = { ...updates };

    delete (cleanedInput as any).createdAt;
    delete (cleanedInput as any).updatedAt;
    delete (cleanedInput as any).owner;
    delete (cleanedInput as any).__typename;

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

    const result = await client.graphql({
      query: mutations.updateCampaign,
      variables: { input },
    });

    const errors = (result as any)?.errors;
    if (errors?.length) {
      return errors[0]?.message || 'Unknown error updating campaign';
    }

    return true;
  } catch (error) {
    console.error('Error updating campaign:', error);
    return 'Error updating campaign';
  }
};

export const deleteCampaign = async (id: string): Promise<boolean | string> => {
  try {
    const result = await client.graphql({
      query: mutations.deleteCampaign,
      variables: { input: { id } }
    });

    const errors = (result as any)?.errors;
    if (errors?.length) {
      return errors[0]?.message || 'Unknown error deleting campaign';
    }

    return true;
  } catch (error) {
    console.error('Error deleting campaign:', error);
    return 'Error deleting campaign';
  }
};
