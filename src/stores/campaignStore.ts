import { defineStore } from 'pinia';
import type { Campaign } from '@/types/types';
import {
  getCampaigns,
  getCampaign,
  createCampaign as createCampaignService,
  updateCampaign as updateCampaignService,
  deleteCampaign as deleteCampaignService
} from '@/services/campaignService';
import { getMap } from '@/services/mapService';
import { getSteading } from '@/services/steadingService';
import { getFront } from '@/services/frontService';

export const useCampaignStore = defineStore('campaigns', {
  state: () => ({
    campaigns: [] as Campaign[],
    selectedCampaign: null as Campaign | null,
    linkedSteadings: [] as any[],
    linkedFronts: [] as any[],
  }),
  actions: {
    async fetchCampaigns(userId: string): Promise<true | string> {
      const result = await getCampaigns(userId);
      if (typeof result === 'string') {
        console.error('Failed to fetch campaigns', result);
        return result;
      }
      this.campaigns = result;
      return true;
    },

    async createCampaign(campaignData: Partial<Campaign>, userId: string): Promise<true | string> {
      const result = await createCampaignService({
        ...campaignData,
        userId
      } as Omit<Campaign, 'id'>);

      if (typeof result === 'string') {
        console.error('Failed to create campaign', result);
        return result;
      }

      this.campaigns.push(result);
      return true;
    },

    async updateCampaign(campaignId: string, updates: Partial<Campaign>): Promise<true | string> {
      const result = await updateCampaignService(campaignId, updates);

      if (typeof result === 'string') {
        console.error('Failed to update campaign', result);
        return result;
      }

      if (updates.userId) {
        await this.fetchCampaigns(updates.userId);
      }
      return true;
    },

    async deleteCampaign(campaignId: string): Promise<true | string> {
      const result = await deleteCampaignService(campaignId);
      if (typeof result === 'string') {
        console.error('Failed to delete campaign', result);
        return result;
      }
      this.campaigns = this.campaigns.filter(c => c.id !== campaignId);
      return true;
    },

    async fetchCampaignById(id: string): Promise<true | string> {
      const result = await getCampaign(id);
      if (typeof result === 'string') {
        console.error('Failed to fetch campaign by ID', result);
        return result;
      }
      this.selectedCampaign = result;
      await this.loadLinkedEntities();
      return true;
    },

    async loadLinkedEntities() {
      if (!this.selectedCampaign) return;
      const mapIds = this.selectedCampaign.mapIds || [];

      const loadedMaps = await Promise.all(mapIds.map(id => getMap(id)));

      const frontIds = new Set<string>();
      const steadingIds = new Set<string>();

      for (const map of loadedMaps.filter(Boolean)) {
        const locations = typeof map?.locations === 'string' ? JSON.parse(map.locations) : map?.locations;

        for (const loc of locations || []) {
          if (loc.steading_id) steadingIds.add(loc.steading_id);
          if (Array.isArray(loc.fronts)) loc.fronts.forEach((fid: string) => frontIds.add(fid));
        }
      }

      const [steadings, fronts] = await Promise.all([
        Promise.all(Array.from(steadingIds).map(id => getSteading(id))),
        Promise.all(Array.from(frontIds).map(id => getFront(id)))
      ]);

      this.linkedSteadings = steadings.filter(Boolean);
      this.linkedFronts = fronts.filter(Boolean);
    },

    selectCampaign(id: string) {
      this.selectedCampaign = this.campaigns.find(c => c.id === id) || null;
    },
  },
});