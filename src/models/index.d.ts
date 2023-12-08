import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerProfession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profession, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly diceType: string;
  readonly source: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profession, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly diceType: string;
  readonly source: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profession = LazyLoading extends LazyLoadingDisabled ? EagerProfession : LazyProfession

export declare const Profession: (new (init: ModelInit<Profession>) => Profession) & {
  copyOf(source: Profession, mutator: (draft: MutableModel<Profession>) => MutableModel<Profession> | void): Profession;
}

type EagerSpell = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Spell, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly level: number;
  readonly type: string;
  readonly ongoing?: boolean | null;
  readonly description: string;
  readonly selected?: boolean | null;
  readonly tags?: (string | null)[] | null;
  readonly source: string;
  readonly profession: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySpell = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Spell, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly level: number;
  readonly type: string;
  readonly ongoing?: boolean | null;
  readonly description: string;
  readonly selected?: boolean | null;
  readonly tags?: (string | null)[] | null;
  readonly source: string;
  readonly profession: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Spell = LazyLoading extends LazyLoadingDisabled ? EagerSpell : LazySpell

export declare const Spell: (new (init: ModelInit<Spell>) => Spell) & {
  copyOf(source: Spell, mutator: (draft: MutableModel<Spell>) => MutableModel<Spell> | void): Spell;
}

type EagerGear = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Gear, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly weight: number;
  readonly uses?: number | null;
  readonly tags?: (string | null)[] | null;
  readonly source: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGear = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Gear, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly weight: number;
  readonly uses?: number | null;
  readonly tags?: (string | null)[] | null;
  readonly source: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Gear = LazyLoading extends LazyLoadingDisabled ? EagerGear : LazyGear

export declare const Gear: (new (init: ModelInit<Gear>) => Gear) & {
  copyOf(source: Gear, mutator: (draft: MutableModel<Gear>) => MutableModel<Gear> | void): Gear;
}

type EagerMove = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Move, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly selected?: boolean | null;
  readonly selectedOnNew?: boolean | null;
  readonly profession: string;
  readonly source: string;
  readonly isStartingMove?: boolean | null;
  readonly isAdvancedMove?: boolean | null;
  readonly isTwoToTenMove?: boolean | null;
  readonly isSixToTenMove?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMove = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Move, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly selected?: boolean | null;
  readonly selectedOnNew?: boolean | null;
  readonly profession: string;
  readonly source: string;
  readonly isStartingMove?: boolean | null;
  readonly isAdvancedMove?: boolean | null;
  readonly isTwoToTenMove?: boolean | null;
  readonly isSixToTenMove?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Move = LazyLoading extends LazyLoadingDisabled ? EagerMove : LazyMove

export declare const Move: (new (init: ModelInit<Move>) => Move) & {
  copyOf(source: Move, mutator: (draft: MutableModel<Move>) => MutableModel<Move> | void): Move;
}

type EagerBond = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bond, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly profession: string;
  readonly value?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBond = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bond, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly profession: string;
  readonly value?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bond = LazyLoading extends LazyLoadingDisabled ? EagerBond : LazyBond

export declare const Bond: (new (init: ModelInit<Bond>) => Bond) & {
  copyOf(source: Bond, mutator: (draft: MutableModel<Bond>) => MutableModel<Bond> | void): Bond;
}

type EagerAbilityScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AbilityScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly shortName: string;
  readonly debility: string;
  readonly debilityPenalty: string;
  readonly value: string;
  readonly bonus: number;
  readonly debilityIsSelected?: boolean | null;
  readonly sortOrder?: number | null;
  readonly tags?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAbilityScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AbilityScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly shortName: string;
  readonly debility: string;
  readonly debilityPenalty: string;
  readonly value: string;
  readonly bonus: number;
  readonly debilityIsSelected?: boolean | null;
  readonly sortOrder?: number | null;
  readonly tags?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AbilityScore = LazyLoading extends LazyLoadingDisabled ? EagerAbilityScore : LazyAbilityScore

export declare const AbilityScore: (new (init: ModelInit<AbilityScore>) => AbilityScore) & {
  copyOf(source: AbilityScore, mutator: (draft: MutableModel<AbilityScore>) => MutableModel<AbilityScore> | void): AbilityScore;
}

type EagerRace = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Race, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly profession: string;
  readonly selected: boolean;
  readonly source: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRace = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Race, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly profession: string;
  readonly selected: boolean;
  readonly source: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Race = LazyLoading extends LazyLoadingDisabled ? EagerRace : LazyRace

export declare const Race: (new (init: ModelInit<Race>) => Race) & {
  copyOf(source: Race, mutator: (draft: MutableModel<Race>) => MutableModel<Race> | void): Race;
}

type EagerAlignment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Alignment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly selected?: boolean | null;
  readonly profession: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAlignment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Alignment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly selected?: boolean | null;
  readonly profession: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Alignment = LazyLoading extends LazyLoadingDisabled ? EagerAlignment : LazyAlignment

export declare const Alignment: (new (init: ModelInit<Alignment>) => Alignment) & {
  copyOf(source: Alignment, mutator: (draft: MutableModel<Alignment>) => MutableModel<Alignment> | void): Alignment;
}

type EagerLook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Look, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly value?: string | null;
  readonly profession: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Look, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly value?: string | null;
  readonly profession: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Look = LazyLoading extends LazyLoadingDisabled ? EagerLook : LazyLook

export declare const Look: (new (init: ModelInit<Look>) => Look) & {
  copyOf(source: Look, mutator: (draft: MutableModel<Look>) => MutableModel<Look> | void): Look;
}

type EagerCharacter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Character, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly name: string;
  readonly level?: number | null;
  readonly xp?: number | null;
  readonly armor?: number | null;
  readonly hitPointsMax?: number | null;
  readonly hitPointsCurrent?: number | null;
  readonly coin?: number | null;
  readonly loadMax?: number | null;
  readonly loadCurrent?: number | null;
  readonly isTemplate?: boolean | null;
  readonly tags?: (string | null)[] | null;
  readonly notes?: (string | null)[] | null;
  readonly gear?: string | null;
  readonly startingMoves?: string | null;
  readonly advancedMovesTwoToTen?: string | null;
  readonly advancedMovesSixToTen?: string | null;
  readonly bonds?: string | null;
  readonly abilityScores?: string | null;
  readonly race?: string | null;
  readonly alignment?: string | null;
  readonly look?: string | null;
  readonly profession?: string | null;
  readonly spells?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCharacter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Character, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly name: string;
  readonly level?: number | null;
  readonly xp?: number | null;
  readonly armor?: number | null;
  readonly hitPointsMax?: number | null;
  readonly hitPointsCurrent?: number | null;
  readonly coin?: number | null;
  readonly loadMax?: number | null;
  readonly loadCurrent?: number | null;
  readonly isTemplate?: boolean | null;
  readonly tags?: (string | null)[] | null;
  readonly notes?: (string | null)[] | null;
  readonly gear?: string | null;
  readonly startingMoves?: string | null;
  readonly advancedMovesTwoToTen?: string | null;
  readonly advancedMovesSixToTen?: string | null;
  readonly bonds?: string | null;
  readonly abilityScores?: string | null;
  readonly race?: string | null;
  readonly alignment?: string | null;
  readonly look?: string | null;
  readonly profession?: string | null;
  readonly spells?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Character = LazyLoading extends LazyLoadingDisabled ? EagerCharacter : LazyCharacter

export declare const Character: (new (init: ModelInit<Character>) => Character) & {
  copyOf(source: Character, mutator: (draft: MutableModel<Character>) => MutableModel<Character> | void): Character;
}