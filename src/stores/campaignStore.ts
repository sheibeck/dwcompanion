// stores/campaignStore.ts
import { defineStore } from 'pinia';
import type { Campaign } from '@/types/types';
import {
  getCampaigns,
  getCampaign,
  createCampaign as createCampaignService,
  updateCampaign as updateCampaignService,
  deleteCampaign as deleteCampaignService
} from '@/services/campaignService';

export const useCampaignStore = defineStore('campaigns', {
  state: () => ({
    campaigns: [] as Campaign[],
    selectedCampaign: null as Campaign | null,
  }),
  actions: {
    async fetchCampaigns() {
      try {
        this.campaigns = await getCampaigns();
      } catch (error) {
        console.error('Failed to fetch campaigns', error);
      }
    },

    async createCampaign(campaignData: Partial<Campaign>) {
      try {
        const created = await createCampaignService(campaignData as Omit<Campaign, 'id'>);
        if (created) {
          this.campaigns.push(created);
        }
      } catch (error) {
        console.error('Failed to create campaign', error);
      }
    },

    async updateCampaign(campaignId: string, updates: Partial<Campaign>) {
      try {
        const success = await updateCampaignService(campaignId, updates);
        if (success) {
          await this.fetchCampaigns();
        }
      } catch (error) {
        console.error('Failed to update campaign', error);
      }
    },

    async deleteCampaign(campaignId: string) {
      try {
        const success = await deleteCampaignService(campaignId);
        if (success) {
          this.campaigns = this.campaigns.filter(c => c.id !== campaignId);
        }
      } catch (error) {
        console.error('Failed to delete campaign', error);
      }
    },

    async fetchCampaignById(id: string) {
      try {
        this.selectedCampaign = await getCampaign(id);
      } catch (error) {
        console.error('Failed to fetch campaign by ID', error);
      }
    },

    selectCampaign(id: string) {
      this.selectedCampaign = this.campaigns.find(c => c.id === id) || null;
    },
  },
});