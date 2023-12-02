import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerSource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Source, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Source, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Source = LazyLoading extends LazyLoadingDisabled ? EagerSource : LazySource

export declare const Source: (new (init: ModelInit<Source>) => Source) & {
  copyOf(source: Source, mutator: (draft: MutableModel<Source>) => MutableModel<Source> | void): Source;
}

type EagerCharacterProfession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterProfession, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Character?: Character | null;
  readonly Profession?: Profession | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterProfessionCharacterId?: string | null;
  readonly characterProfessionProfessionId?: string | null;
}

type LazyCharacterProfession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterProfession, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Character: AsyncItem<Character | undefined>;
  readonly Profession: AsyncItem<Profession | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterProfessionCharacterId?: string | null;
  readonly characterProfessionProfessionId?: string | null;
}

export declare type CharacterProfession = LazyLoading extends LazyLoadingDisabled ? EagerCharacterProfession : LazyCharacterProfession

export declare const CharacterProfession: (new (init: ModelInit<CharacterProfession>) => CharacterProfession) & {
  copyOf(source: CharacterProfession, mutator: (draft: MutableModel<CharacterProfession>) => MutableModel<CharacterProfession> | void): CharacterProfession;
}

type EagerProfession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profession, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly source: Source;
  readonly damageDiceType?: DiceType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly professionSourceId: string;
  readonly professionDamageDiceTypeId?: string | null;
}

type LazyProfession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profession, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly source: AsyncItem<Source>;
  readonly damageDiceType: AsyncItem<DiceType | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly professionSourceId: string;
  readonly professionDamageDiceTypeId?: string | null;
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
  readonly source: Source;
  readonly profession: Profession;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly spellSourceId: string;
  readonly spellProfessionId: string;
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
  readonly source: AsyncItem<Source>;
  readonly profession: AsyncItem<Profession>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly spellSourceId: string;
  readonly spellProfessionId: string;
}

export declare type Spell = LazyLoading extends LazyLoadingDisabled ? EagerSpell : LazySpell

export declare const Spell: (new (init: ModelInit<Spell>) => Spell) & {
  copyOf(source: Spell, mutator: (draft: MutableModel<Spell>) => MutableModel<Spell> | void): Spell;
}

type EagerCharacterSpell = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterSpell, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly spell: Spell;
  readonly selected?: boolean | null;
  readonly tags?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterSpellSpellId: string;
}

type LazyCharacterSpell = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterSpell, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly spell: AsyncItem<Spell>;
  readonly selected?: boolean | null;
  readonly tags?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterSpellSpellId: string;
}

export declare type CharacterSpell = LazyLoading extends LazyLoadingDisabled ? EagerCharacterSpell : LazyCharacterSpell

export declare const CharacterSpell: (new (init: ModelInit<CharacterSpell>) => CharacterSpell) & {
  copyOf(source: CharacterSpell, mutator: (draft: MutableModel<CharacterSpell>) => MutableModel<CharacterSpell> | void): CharacterSpell;
}

type EagerCharacterGear = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterGear, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gear: Gear;
  readonly uses?: number | null;
  readonly tags?: (string | null)[] | null;
  readonly characterID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterGearGearId: string;
}

type LazyCharacterGear = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterGear, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gear: AsyncItem<Gear>;
  readonly uses?: number | null;
  readonly tags?: (string | null)[] | null;
  readonly characterID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterGearGearId: string;
}

export declare type CharacterGear = LazyLoading extends LazyLoadingDisabled ? EagerCharacterGear : LazyCharacterGear

export declare const CharacterGear: (new (init: ModelInit<CharacterGear>) => CharacterGear) & {
  copyOf(source: CharacterGear, mutator: (draft: MutableModel<CharacterGear>) => MutableModel<CharacterGear> | void): CharacterGear;
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
  readonly source?: Source | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly gearSourceId?: string | null;
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
  readonly source: AsyncItem<Source | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly gearSourceId?: string | null;
}

export declare type Gear = LazyLoading extends LazyLoadingDisabled ? EagerGear : LazyGear

export declare const Gear: (new (init: ModelInit<Gear>) => Gear) & {
  copyOf(source: Gear, mutator: (draft: MutableModel<Gear>) => MutableModel<Gear> | void): Gear;
}

type EagerCharacterMove = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterMove, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly selected?: boolean | null;
  readonly move: Move;
  readonly characterID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterMoveMoveId: string;
}

type LazyCharacterMove = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterMove, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly selected?: boolean | null;
  readonly move: AsyncItem<Move>;
  readonly characterID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterMoveMoveId: string;
}

export declare type CharacterMove = LazyLoading extends LazyLoadingDisabled ? EagerCharacterMove : LazyCharacterMove

export declare const CharacterMove: (new (init: ModelInit<CharacterMove>) => CharacterMove) & {
  copyOf(source: CharacterMove, mutator: (draft: MutableModel<CharacterMove>) => MutableModel<CharacterMove> | void): CharacterMove;
}

type EagerMove = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Move, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly class: Profession;
  readonly source?: Source | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly moveClassId: string;
  readonly moveSourceId?: string | null;
}

type LazyMove = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Move, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly class: AsyncItem<Profession>;
  readonly source: AsyncItem<Source | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly moveClassId: string;
  readonly moveSourceId?: string | null;
}

export declare type Move = LazyLoading extends LazyLoadingDisabled ? EagerMove : LazyMove

export declare const Move: (new (init: ModelInit<Move>) => Move) & {
  copyOf(source: Move, mutator: (draft: MutableModel<Move>) => MutableModel<Move> | void): Move;
}

type EagerCharacterBond = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterBond, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly bond: Bond;
  readonly selected?: boolean | null;
  readonly characterID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterBondBondId: string;
}

type LazyCharacterBond = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterBond, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly bond: AsyncItem<Bond>;
  readonly selected?: boolean | null;
  readonly characterID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterBondBondId: string;
}

export declare type CharacterBond = LazyLoading extends LazyLoadingDisabled ? EagerCharacterBond : LazyCharacterBond

export declare const CharacterBond: (new (init: ModelInit<CharacterBond>) => CharacterBond) & {
  copyOf(source: CharacterBond, mutator: (draft: MutableModel<CharacterBond>) => MutableModel<CharacterBond> | void): CharacterBond;
}

type EagerBond = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bond, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly class: Profession;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bondClassId: string;
}

type LazyBond = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bond, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly class: AsyncItem<Profession>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bondClassId: string;
}

export declare type Bond = LazyLoading extends LazyLoadingDisabled ? EagerBond : LazyBond

export declare const Bond: (new (init: ModelInit<Bond>) => Bond) & {
  copyOf(source: Bond, mutator: (draft: MutableModel<Bond>) => MutableModel<Bond> | void): Bond;
}

type EagerCharacterAbilityScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterAbilityScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly abilityScore: AbilityScore;
  readonly value: string;
  readonly bonus: number;
  readonly tags?: (string | null)[] | null;
  readonly characterID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterAbilityScoreAbilityScoreId: string;
}

type LazyCharacterAbilityScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterAbilityScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly abilityScore: AsyncItem<AbilityScore>;
  readonly value: string;
  readonly bonus: number;
  readonly tags?: (string | null)[] | null;
  readonly characterID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterAbilityScoreAbilityScoreId: string;
}

export declare type CharacterAbilityScore = LazyLoading extends LazyLoadingDisabled ? EagerCharacterAbilityScore : LazyCharacterAbilityScore

export declare const CharacterAbilityScore: (new (init: ModelInit<CharacterAbilityScore>) => CharacterAbilityScore) & {
  copyOf(source: CharacterAbilityScore, mutator: (draft: MutableModel<CharacterAbilityScore>) => MutableModel<CharacterAbilityScore> | void): CharacterAbilityScore;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AbilityScore = LazyLoading extends LazyLoadingDisabled ? EagerAbilityScore : LazyAbilityScore

export declare const AbilityScore: (new (init: ModelInit<AbilityScore>) => AbilityScore) & {
  copyOf(source: AbilityScore, mutator: (draft: MutableModel<AbilityScore>) => MutableModel<AbilityScore> | void): AbilityScore;
}

type EagerCharacterRace = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterRace, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly race: Race;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterRaceRaceId: string;
}

type LazyCharacterRace = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterRace, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly race: AsyncItem<Race>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterRaceRaceId: string;
}

export declare type CharacterRace = LazyLoading extends LazyLoadingDisabled ? EagerCharacterRace : LazyCharacterRace

export declare const CharacterRace: (new (init: ModelInit<CharacterRace>) => CharacterRace) & {
  copyOf(source: CharacterRace, mutator: (draft: MutableModel<CharacterRace>) => MutableModel<CharacterRace> | void): CharacterRace;
}

type EagerRace = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Race, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly profession?: Profession | null;
  readonly source: Source;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly raceProfessionId?: string | null;
  readonly raceSourceId: string;
}

type LazyRace = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Race, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly profession: AsyncItem<Profession | undefined>;
  readonly source: AsyncItem<Source>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly raceProfessionId?: string | null;
  readonly raceSourceId: string;
}

export declare type Race = LazyLoading extends LazyLoadingDisabled ? EagerRace : LazyRace

export declare const Race: (new (init: ModelInit<Race>) => Race) & {
  copyOf(source: Race, mutator: (draft: MutableModel<Race>) => MutableModel<Race> | void): Race;
}

type EagerCharacterAlignment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterAlignment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly alignment: Alignment;
  readonly selected?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterAlignmentAlignmentId: string;
}

type LazyCharacterAlignment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterAlignment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly alignment: AsyncItem<Alignment>;
  readonly selected?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterAlignmentAlignmentId: string;
}

export declare type CharacterAlignment = LazyLoading extends LazyLoadingDisabled ? EagerCharacterAlignment : LazyCharacterAlignment

export declare const CharacterAlignment: (new (init: ModelInit<CharacterAlignment>) => CharacterAlignment) & {
  copyOf(source: CharacterAlignment, mutator: (draft: MutableModel<CharacterAlignment>) => MutableModel<CharacterAlignment> | void): CharacterAlignment;
}

type EagerAlignment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Alignment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly class: Profession;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly alignmentClassId: string;
}

type LazyAlignment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Alignment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly class: AsyncItem<Profession>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly alignmentClassId: string;
}

export declare type Alignment = LazyLoading extends LazyLoadingDisabled ? EagerAlignment : LazyAlignment

export declare const Alignment: (new (init: ModelInit<Alignment>) => Alignment) & {
  copyOf(source: Alignment, mutator: (draft: MutableModel<Alignment>) => MutableModel<Alignment> | void): Alignment;
}

type EagerDiceType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DiceType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDiceType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DiceType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DiceType = LazyLoading extends LazyLoadingDisabled ? EagerDiceType : LazyDiceType

export declare const DiceType: (new (init: ModelInit<DiceType>) => DiceType) & {
  copyOf(source: DiceType, mutator: (draft: MutableModel<DiceType>) => MutableModel<DiceType> | void): DiceType;
}

type EagerCharacterLook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterLook, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly look?: Look[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCharacterLook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CharacterLook, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly look: AsyncCollection<Look>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CharacterLook = LazyLoading extends LazyLoadingDisabled ? EagerCharacterLook : LazyCharacterLook

export declare const CharacterLook: (new (init: ModelInit<CharacterLook>) => CharacterLook) & {
  copyOf(source: CharacterLook, mutator: (draft: MutableModel<CharacterLook>) => MutableModel<CharacterLook> | void): CharacterLook;
}

type EagerLook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Look, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly characterlookID: string;
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
  readonly characterlookID: string;
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
  readonly gear?: (CharacterGear | null)[] | null;
  readonly sixToTenMoves?: (CharacterMove | null)[] | null;
  readonly twoToTenMoves?: (CharacterMove | null)[] | null;
  readonly startingMoves?: (CharacterMove | null)[] | null;
  readonly bonds?: (CharacterBond | null)[] | null;
  readonly abilityscores?: (CharacterAbilityScore | null)[] | null;
  readonly race?: CharacterRace | null;
  readonly alignment?: CharacterAlignment | null;
  readonly tags?: (string | null)[] | null;
  readonly look?: CharacterLook | null;
  readonly notes?: string | null;
  readonly CharacterProfession?: CharacterProfession | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterRaceId?: string | null;
  readonly characterAlignmentId?: string | null;
  readonly characterLookId?: string | null;
  readonly characterCharacterProfessionId?: string | null;
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
  readonly gear: AsyncCollection<CharacterGear>;
  readonly sixToTenMoves: AsyncCollection<CharacterMove>;
  readonly twoToTenMoves: AsyncCollection<CharacterMove>;
  readonly startingMoves: AsyncCollection<CharacterMove>;
  readonly bonds: AsyncCollection<CharacterBond>;
  readonly abilityscores: AsyncCollection<CharacterAbilityScore>;
  readonly race: AsyncItem<CharacterRace | undefined>;
  readonly alignment: AsyncItem<CharacterAlignment | undefined>;
  readonly tags?: (string | null)[] | null;
  readonly look: AsyncItem<CharacterLook | undefined>;
  readonly notes?: string | null;
  readonly CharacterProfession: AsyncItem<CharacterProfession | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly characterRaceId?: string | null;
  readonly characterAlignmentId?: string | null;
  readonly characterLookId?: string | null;
  readonly characterCharacterProfessionId?: string | null;
}

export declare type Character = LazyLoading extends LazyLoadingDisabled ? EagerCharacter : LazyCharacter

export declare const Character: (new (init: ModelInit<Character>) => Character) & {
  copyOf(source: Character, mutator: (draft: MutableModel<Character>) => MutableModel<Character> | void): Character;
}