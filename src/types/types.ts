// types.ts or models.ts
export interface SessionEntry {
    id: string;
    title: string;
    date: string;
    notes: string;
  }
  
  export interface Campaign {
    id: string;
    name: string;
    description?: string;
    characterIds: string[];
    frontIds: string[];
    mapIds: string[];
    steadingIds: string[];
    sessions: SessionEntry[];
  }

  export interface Character {
    id: string;
    userId: string;
    name: string;
    level?: number;
    xp?: number;
    armor?: number;
    hitPointsMax?: number;
    hitPointsCurrent?: number;
    coin?: number;
    loadMax?: number;
    loadCurrent?: number;
    isTemplate?: boolean;
    tags?: string[];
    notes?: string[];
    gear?: any;
    startingMoves?: any;
    advancedMovesTwoToTen?: any;
    advancedMovesSixToTen?: any;
    bonds?: any;
    abilityScores?: any;
    race?: any;
    alignment?: any;
    look?: any;
    profession?: any;
    spells?: any;
    createdAt?: string;
    updatedAt?: string;
    owner?: string;
  }

  export interface Front {
    id: string;
    userId: string;
    type: string;
    name: string;
    description: string;
    active?: boolean;
    resolved?: boolean;
    createdAt?: string;
    updatedAt?: string;
    owner?: string;
  }
  
  export interface Steading {
    id: string;
    userId: string;
    type: string;
    name: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
    owner?: string;
  }
  
  export interface Map {
    id: string;
    userId: string;
    name: string;
    mapFile: string;
    locations?: any;
    createdAt?: string;
    updatedAt?: string;
    owner?: string;
  }
  
  
  