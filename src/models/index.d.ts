import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerUser = {
  readonly id: string;
  readonly username: string;
  readonly email: string;
}

type LazyUser = {
  readonly id: string;
  readonly username: string;
  readonly email: string;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User)

type EagerSource = {
  readonly id: string;
  readonly name: string;
}

type LazySource = {
  readonly id: string;
  readonly name: string;
}

export declare type Source = LazyLoading extends LazyLoadingDisabled ? EagerSource : LazySource

export declare const Source: (new (init: ModelInit<Source>) => Source)

type EagerClass = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly source: Source;
}

type LazyClass = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly source: Source;
}

export declare type Class = LazyLoading extends LazyLoadingDisabled ? EagerClass : LazyClass

export declare const Class: (new (init: ModelInit<Class>) => Class)

type EagerSpell = {
  readonly id: string;
  readonly name: string;
  readonly level: number;
  readonly type: string;
  readonly ongoing?: boolean | null;
  readonly description: string;
  readonly source: Source;
  readonly class: Class;
}

type LazySpell = {
  readonly id: string;
  readonly name: string;
  readonly level: number;
  readonly type: string;
  readonly ongoing?: boolean | null;
  readonly description: string;
  readonly source: Source;
  readonly class: Class;
}

export declare type Spell = LazyLoading extends LazyLoadingDisabled ? EagerSpell : LazySpell

export declare const Spell: (new (init: ModelInit<Spell>) => Spell)

type EagerSpells = {
  readonly id: string;
  readonly selected?: boolean | null;
  readonly spell: Spell;
}

type LazySpells = {
  readonly id: string;
  readonly selected?: boolean | null;
  readonly spell: Spell;
}

export declare type Spells = LazyLoading extends LazyLoadingDisabled ? EagerSpells : LazySpells

export declare const Spells: (new (init: ModelInit<Spells>) => Spells)

type EagerGear = {
  readonly id: string;
  readonly description: string;
  readonly weight: number;
  readonly uses?: number | null;
  readonly tags?: (string | null)[] | null;
}

type LazyGear = {
  readonly id: string;
  readonly description: string;
  readonly weight: number;
  readonly uses?: number | null;
  readonly tags?: (string | null)[] | null;
}

export declare type Gear = LazyLoading extends LazyLoadingDisabled ? EagerGear : LazyGear

export declare const Gear: (new (init: ModelInit<Gear>) => Gear)

type EagerCharacterMove = {
  readonly id: string;
  readonly selected?: boolean | null;
  readonly move: Move;
}

type LazyCharacterMove = {
  readonly id: string;
  readonly selected?: boolean | null;
  readonly move: Move;
}

export declare type CharacterMove = LazyLoading extends LazyLoadingDisabled ? EagerCharacterMove : LazyCharacterMove

export declare const CharacterMove: (new (init: ModelInit<CharacterMove>) => CharacterMove)

type EagerMove = {
  readonly id: string;
  readonly description: string;
  readonly class: Class;
}

type LazyMove = {
  readonly id: string;
  readonly description: string;
  readonly class: Class;
}

export declare type Move = LazyLoading extends LazyLoadingDisabled ? EagerMove : LazyMove

export declare const Move: (new (init: ModelInit<Move>) => Move)

type EagerBonds = {
  readonly id: string;
  readonly description?: string | null;
  readonly class: Class;
}

type LazyBonds = {
  readonly id: string;
  readonly description?: string | null;
  readonly class: Class;
}

export declare type Bonds = LazyLoading extends LazyLoadingDisabled ? EagerBonds : LazyBonds

export declare const Bonds: (new (init: ModelInit<Bonds>) => Bonds)

type EagerAbilityscores = {
  readonly id: string;
  readonly name: string;
  readonly shortName: string;
  readonly value: string;
  readonly bonus: number;
  readonly debility: string;
  readonly debilityPenalty: string;
}

type LazyAbilityscores = {
  readonly id: string;
  readonly name: string;
  readonly shortName: string;
  readonly value: string;
  readonly bonus: number;
  readonly debility: string;
  readonly debilityPenalty: string;
}

export declare type Abilityscores = LazyLoading extends LazyLoadingDisabled ? EagerAbilityscores : LazyAbilityscores

export declare const Abilityscores: (new (init: ModelInit<Abilityscores>) => Abilityscores)

type EagerRace = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly class?: Class | null;
  readonly source: Source;
}

type LazyRace = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly class?: Class | null;
  readonly source: Source;
}

export declare type Race = LazyLoading extends LazyLoadingDisabled ? EagerRace : LazyRace

export declare const Race: (new (init: ModelInit<Race>) => Race)

type EagerAlignment = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly class: Class;
}

type LazyAlignment = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly class: Class;
}

export declare type Alignment = LazyLoading extends LazyLoadingDisabled ? EagerAlignment : LazyAlignment

export declare const Alignment: (new (init: ModelInit<Alignment>) => Alignment)

type EagerDiceType = {
  readonly id: string;
  readonly name?: string | null;
}

type LazyDiceType = {
  readonly id: string;
  readonly name?: string | null;
}

export declare type DiceType = LazyLoading extends LazyLoadingDisabled ? EagerDiceType : LazyDiceType

export declare const DiceType: (new (init: ModelInit<DiceType>) => DiceType)

type EagerCondition = {
  readonly id: string;
  readonly description: string;
}

type LazyCondition = {
  readonly id: string;
  readonly description: string;
}

export declare type Condition = LazyLoading extends LazyLoadingDisabled ? EagerCondition : LazyCondition

export declare const Condition: (new (init: ModelInit<Condition>) => Condition)

type EagerConditionTypes = {
  readonly id: string;
  readonly name: string;
  readonly conditions?: (Condition | null)[] | null;
}

type LazyConditionTypes = {
  readonly id: string;
  readonly name: string;
  readonly conditions?: (Condition | null)[] | null;
}

export declare type ConditionTypes = LazyLoading extends LazyLoadingDisabled ? EagerConditionTypes : LazyConditionTypes

export declare const ConditionTypes: (new (init: ModelInit<ConditionTypes>) => ConditionTypes)

type EagerLook = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly class: Class;
}

type LazyLook = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly class: Class;
}

export declare type Look = LazyLoading extends LazyLoadingDisabled ? EagerLook : LazyLook

export declare const Look: (new (init: ModelInit<Look>) => Look)

type EagerCharacter = {
  readonly ownerId: string;
  readonly id: string;
  readonly name: string;
  readonly level?: number | null;
  readonly xp?: number | null;
  readonly armor?: number | null;
  readonly hitPointsMax?: number | null;
  readonly hitPointsCurrent?: number | null;
  readonly coin?: number | null;
  readonly loadMax?: number | null;
  readonly loadCurrent?: number | null;
  readonly isPublic?: boolean | null;
  readonly isCoreTemplate?: boolean | null;
  readonly spells?: (Spells | null)[] | null;
  readonly gear?: (Gear | null)[] | null;
  readonly sixToTenMoves?: (CharacterMove | null)[] | null;
  readonly twoToTenMoves?: (CharacterMove | null)[] | null;
  readonly startingMoves?: (CharacterMove | null)[] | null;
  readonly bonds?: (Bonds | null)[] | null;
  readonly abilityscores?: (Abilityscores | null)[] | null;
  readonly race?: Race | null;
  readonly alignment?: Alignment | null;
  readonly tags?: (string | null)[] | null;
  readonly dicetype?: DiceType | null;
  readonly conditionTypes?: (ConditionTypes | null)[] | null;
  readonly look?: (Look | null)[] | null;
  readonly class?: Class | null;
  readonly notes?: string | null;
}

type LazyCharacter = {
  readonly ownerId: string;
  readonly id: string;
  readonly name: string;
  readonly level?: number | null;
  readonly xp?: number | null;
  readonly armor?: number | null;
  readonly hitPointsMax?: number | null;
  readonly hitPointsCurrent?: number | null;
  readonly coin?: number | null;
  readonly loadMax?: number | null;
  readonly loadCurrent?: number | null;
  readonly isPublic?: boolean | null;
  readonly isCoreTemplate?: boolean | null;
  readonly spells?: (Spells | null)[] | null;
  readonly gear?: (Gear | null)[] | null;
  readonly sixToTenMoves?: (CharacterMove | null)[] | null;
  readonly twoToTenMoves?: (CharacterMove | null)[] | null;
  readonly startingMoves?: (CharacterMove | null)[] | null;
  readonly bonds?: (Bonds | null)[] | null;
  readonly abilityscores?: (Abilityscores | null)[] | null;
  readonly race?: Race | null;
  readonly alignment?: Alignment | null;
  readonly tags?: (string | null)[] | null;
  readonly dicetype?: DiceType | null;
  readonly conditionTypes?: (ConditionTypes | null)[] | null;
  readonly look?: (Look | null)[] | null;
  readonly class?: Class | null;
  readonly notes?: string | null;
}

export declare type Character = LazyLoading extends LazyLoadingDisabled ? EagerCharacter : LazyCharacter

export declare const Character: (new (init: ModelInit<Character>) => Character)

