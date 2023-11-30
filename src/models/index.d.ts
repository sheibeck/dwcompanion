import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerUser = {
  readonly id: string;
  readonly name: string;
  readonly email: string;
}

type LazyUser = {
  readonly id: string;
  readonly name: string;
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

type EagerCharacterClass = {
  readonly id: string;
  readonly class: Class;
}

type LazyCharacterClass = {
  readonly id: string;
  readonly class: Class;
}

export declare type CharacterClass = LazyLoading extends LazyLoadingDisabled ? EagerCharacterClass : LazyCharacterClass

export declare const CharacterClass: (new (init: ModelInit<CharacterClass>) => CharacterClass)

type EagerClass = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly source: Source;
  readonly damageDiceType?: DiceType | null;
}

type LazyClass = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly source: Source;
  readonly damageDiceType?: DiceType | null;
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

type EagerCharacterSpell = {
  readonly id: string;
  readonly spell: Spell;
  readonly selected?: boolean | null;
  readonly tags?: (string | null)[] | null;
}

type LazyCharacterSpell = {
  readonly id: string;
  readonly spell: Spell;
  readonly selected?: boolean | null;
  readonly tags?: (string | null)[] | null;
}

export declare type CharacterSpell = LazyLoading extends LazyLoadingDisabled ? EagerCharacterSpell : LazyCharacterSpell

export declare const CharacterSpell: (new (init: ModelInit<CharacterSpell>) => CharacterSpell)

type EagerCharacterGear = {
  readonly id: string;
  readonly gear: Gear;
  readonly uses?: number | null;
  readonly tags?: (string | null)[] | null;
}

type LazyCharacterGear = {
  readonly id: string;
  readonly gear: Gear;
  readonly uses?: number | null;
  readonly tags?: (string | null)[] | null;
}

export declare type CharacterGear = LazyLoading extends LazyLoadingDisabled ? EagerCharacterGear : LazyCharacterGear

export declare const CharacterGear: (new (init: ModelInit<CharacterGear>) => CharacterGear)

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

type EagerCharacterBond = {
  readonly id: string;
  readonly description?: string | null;
  readonly bond: Bond;
  readonly selected?: boolean | null;
}

type LazyCharacterBond = {
  readonly id: string;
  readonly description?: string | null;
  readonly bond: Bond;
  readonly selected?: boolean | null;
}

export declare type CharacterBond = LazyLoading extends LazyLoadingDisabled ? EagerCharacterBond : LazyCharacterBond

export declare const CharacterBond: (new (init: ModelInit<CharacterBond>) => CharacterBond)

type EagerBond = {
  readonly id: string;
  readonly description?: string | null;
  readonly class: Class;
}

type LazyBond = {
  readonly id: string;
  readonly description?: string | null;
  readonly class: Class;
}

export declare type Bond = LazyLoading extends LazyLoadingDisabled ? EagerBond : LazyBond

export declare const Bond: (new (init: ModelInit<Bond>) => Bond)

type EagerCharacterAbilityScore = {
  readonly abilityScore: AbilityScore;
  readonly value: string;
  readonly bonus: number;
  readonly tags?: (string | null)[] | null;
}

type LazyCharacterAbilityScore = {
  readonly abilityScore: AbilityScore;
  readonly value: string;
  readonly bonus: number;
  readonly tags?: (string | null)[] | null;
}

export declare type CharacterAbilityScore = LazyLoading extends LazyLoadingDisabled ? EagerCharacterAbilityScore : LazyCharacterAbilityScore

export declare const CharacterAbilityScore: (new (init: ModelInit<CharacterAbilityScore>) => CharacterAbilityScore)

type EagerAbilityScore = {
  readonly id: string;
  readonly name: string;
  readonly shortName: string;
  readonly debility: string;
  readonly debilityPenalty: string;
}

type LazyAbilityScore = {
  readonly id: string;
  readonly name: string;
  readonly shortName: string;
  readonly debility: string;
  readonly debilityPenalty: string;
}

export declare type AbilityScore = LazyLoading extends LazyLoadingDisabled ? EagerAbilityScore : LazyAbilityScore

export declare const AbilityScore: (new (init: ModelInit<AbilityScore>) => AbilityScore)

type EagerCharacterRace = {
  readonly id: string;
  readonly race: Race;
}

type LazyCharacterRace = {
  readonly id: string;
  readonly race: Race;
}

export declare type CharacterRace = LazyLoading extends LazyLoadingDisabled ? EagerCharacterRace : LazyCharacterRace

export declare const CharacterRace: (new (init: ModelInit<CharacterRace>) => CharacterRace)

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

type EagerCharacterAlignment = {
  readonly id: string;
  readonly alignment: Alignment;
  readonly selected?: boolean | null;
}

type LazyCharacterAlignment = {
  readonly id: string;
  readonly alignment: Alignment;
  readonly selected?: boolean | null;
}

export declare type CharacterAlignment = LazyLoading extends LazyLoadingDisabled ? EagerCharacterAlignment : LazyCharacterAlignment

export declare const CharacterAlignment: (new (init: ModelInit<CharacterAlignment>) => CharacterAlignment)

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

type EagerCharacterConditions = {
  readonly id: string;
  readonly conditionTypes?: (ConditionType | null)[] | null;
}

type LazyCharacterConditions = {
  readonly id: string;
  readonly conditionTypes?: (ConditionType | null)[] | null;
}

export declare type CharacterConditions = LazyLoading extends LazyLoadingDisabled ? EagerCharacterConditions : LazyCharacterConditions

export declare const CharacterConditions: (new (init: ModelInit<CharacterConditions>) => CharacterConditions)

type EagerCondition = {
  readonly id: string;
  readonly description: string;
  readonly selected?: boolean | null;
}

type LazyCondition = {
  readonly id: string;
  readonly description: string;
  readonly selected?: boolean | null;
}

export declare type Condition = LazyLoading extends LazyLoadingDisabled ? EagerCondition : LazyCondition

export declare const Condition: (new (init: ModelInit<Condition>) => Condition)

type EagerConditionType = {
  readonly id: string;
  readonly name: string;
  readonly conditions?: (Condition | null)[] | null;
}

type LazyConditionType = {
  readonly id: string;
  readonly name: string;
  readonly conditions?: (Condition | null)[] | null;
}

export declare type ConditionType = LazyLoading extends LazyLoadingDisabled ? EagerConditionType : LazyConditionType

export declare const ConditionType: (new (init: ModelInit<ConditionType>) => ConditionType)

type EagerCharacterLook = {
  readonly id: string;
  readonly look: (Look | null)[];
}

type LazyCharacterLook = {
  readonly id: string;
  readonly look: (Look | null)[];
}

export declare type CharacterLook = LazyLoading extends LazyLoadingDisabled ? EagerCharacterLook : LazyCharacterLook

export declare const CharacterLook: (new (init: ModelInit<CharacterLook>) => CharacterLook)

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
  readonly userId: string;
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
  readonly spells?: (CharacterSpell | null)[] | null;
  readonly gear?: (CharacterGear | null)[] | null;
  readonly sixToTenMoves?: (CharacterMove | null)[] | null;
  readonly twoToTenMoves?: (CharacterMove | null)[] | null;
  readonly startingMoves?: (CharacterMove | null)[] | null;
  readonly bonds?: (CharacterBond | null)[] | null;
  readonly abilityscores?: (CharacterAbilityScore | null)[] | null;
  readonly race?: CharacterRace | null;
  readonly alignment?: CharacterAlignment | null;
  readonly tags?: (string | null)[] | null;
  readonly conditionTypes?: (CharacterConditions | null)[] | null;
  readonly look?: CharacterLook | null;
  readonly class?: CharacterClass | null;
  readonly notes?: string | null;
}

type LazyCharacter = {
  readonly userId: string;
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
  readonly spells?: (CharacterSpell | null)[] | null;
  readonly gear?: (CharacterGear | null)[] | null;
  readonly sixToTenMoves?: (CharacterMove | null)[] | null;
  readonly twoToTenMoves?: (CharacterMove | null)[] | null;
  readonly startingMoves?: (CharacterMove | null)[] | null;
  readonly bonds?: (CharacterBond | null)[] | null;
  readonly abilityscores?: (CharacterAbilityScore | null)[] | null;
  readonly race?: CharacterRace | null;
  readonly alignment?: CharacterAlignment | null;
  readonly tags?: (string | null)[] | null;
  readonly conditionTypes?: (CharacterConditions | null)[] | null;
  readonly look?: CharacterLook | null;
  readonly class?: CharacterClass | null;
  readonly notes?: string | null;
}

export declare type Character = LazyLoading extends LazyLoadingDisabled ? EagerCharacter : LazyCharacter

export declare const Character: (new (init: ModelInit<Character>) => Character)

