
import { generateClient } from 'aws-amplify/api';
import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';
import * as uuid from 'short-uuid';
import type { Campaign } from '@/types/types';

const client = generateClient();

export const getCampaigns = async (): Promise<Campaign[]> => {
  try {
    const { data } = await client.graphql({ query: queries.listCampaigns });
    const rawItems = (data as any)?.listCampaigns?.items || [];

    // Filter nulls and coerce to type
    return rawItems.filter((item: any) => item != null) as Campaign[];
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    return [];
  }
};

export const getCampaign = async (id: string): Promise<Campaign | null> => {
  try {
    const { data } = await client.graphql({ query: queries.getCampaign, variables: { id } });
    return data.getCampaign as Campaign;
  } catch (error) {
    console.error('Error fetching campaign:', error);
    return null;
  }
};

export const createCampaign = async (campaign: Omit<Campaign, 'id'>): Promise<Campaign | null> => {
  try {
    const newCampaign: Campaign = {
      id: uuid.generate(),
      ...campaign
    };
    const { data } = await client.graphql({ query: mutations.createCampaign, variables: { input: newCampaign } });
    return data.createCampaign as Campaign;
  } catch (error) {
    console.error('Error creating campaign:', error);
    return null;
  }
};

export const updateCampaign = async (id: string, updates: Partial<Campaign>): Promise<boolean> => {
  try {
    await client.graphql({ query: mutations.updateCampaign, variables: { input: { id, ...updates } } });
    return true;
  } catch (error) {
    console.error('Error updating campaign:', error);
    return false;
  }
};

export const deleteCampaign = async (id: string): Promise<boolean> => {
  try {
    await client.graphql({ query: mutations.deleteCampaign, variables: { input: { id } } });
    return true;
  } catch (error) {
    console.error('Error deleting campaign:', error);
    return false;
  }
};
