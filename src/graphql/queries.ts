/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCharacter = /* GraphQL */ `
  query GetCharacter($characterId: ID!) {
    getCharacter(characterId: $characterId) {
      owner {
        id
        username
        email
        __typename
      }
      name
      class {
        name
        description
        __typename
      }
      look {
        name
        description
        tags {
          name
          description
          __typename
        }
        __typename
      }
      level
      xp
      armor
      hitPointsMax
      hitPointsCurrent
      conditions
      damage {
        name
        __typename
      }
      tags {
        name
        description
        __typename
      }
      alignment {
        name
        description
        tags {
          name
          description
          __typename
        }
        class {
          name
          description
          __typename
        }
        __typename
      }
      race {
        name
        description
        tags {
          name
          description
          __typename
        }
        class {
          name
          description
          __typename
        }
        __typename
      }
      abilityScores {
        strength {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        dexterity {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        constitution {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        intelligence {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        wisdom {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        charisma {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        __typename
      }
      bonds {
        description
        tags {
          name
          description
          __typename
        }
        __typename
      }
      startingMoves {
        move {
          name
          description
          __typename
        }
        selected
        tags {
          name
          description
          __typename
        }
        __typename
      }
      twoToTenMoves {
        move {
          name
          description
          __typename
        }
        selected
        tags {
          name
          description
          __typename
        }
        __typename
      }
      sixToTenMoves {
        move {
          name
          description
          __typename
        }
        selected
        tags {
          name
          description
          __typename
        }
        __typename
      }
      coin
      loadMax
      loadCurrent
      gear {
        gear {
          name
          description
          uses
          weight
          __typename
        }
        selected
        tags {
          name
          description
          __typename
        }
        __typename
      }
      spells {
        spell {
          name
          level
          type
          ongoing
          description
          __typename
        }
        selected
        tags {
          name
          description
          __typename
        }
        __typename
      }
      isPublic
      isCoreTemplate
      __typename
    }
  }
`;
export const getUserCharacters = /* GraphQL */ `
  query GetUserCharacters($userId: ID!) {
    getUserCharacters(userId: $userId) {
      owner {
        id
        username
        email
        __typename
      }
      name
      class {
        name
        description
        __typename
      }
      look {
        name
        description
        tags {
          name
          description
          __typename
        }
        __typename
      }
      level
      xp
      armor
      hitPointsMax
      hitPointsCurrent
      conditions
      damage {
        name
        __typename
      }
      tags {
        name
        description
        __typename
      }
      alignment {
        name
        description
        tags {
          name
          description
          __typename
        }
        class {
          name
          description
          __typename
        }
        __typename
      }
      race {
        name
        description
        tags {
          name
          description
          __typename
        }
        class {
          name
          description
          __typename
        }
        __typename
      }
      abilityScores {
        strength {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        dexterity {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        constitution {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        intelligence {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        wisdom {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        charisma {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        __typename
      }
      bonds {
        description
        tags {
          name
          description
          __typename
        }
        __typename
      }
      startingMoves {
        move {
          name
          description
          __typename
        }
        selected
        tags {
          name
          description
          __typename
        }
        __typename
      }
      twoToTenMoves {
        move {
          name
          description
          __typename
        }
        selected
        tags {
          name
          description
          __typename
        }
        __typename
      }
      sixToTenMoves {
        move {
          name
          description
          __typename
        }
        selected
        tags {
          name
          description
          __typename
        }
        __typename
      }
      coin
      loadMax
      loadCurrent
      gear {
        gear {
          name
          description
          uses
          weight
          __typename
        }
        selected
        tags {
          name
          description
          __typename
        }
        __typename
      }
      spells {
        spell {
          name
          level
          type
          ongoing
          description
          __typename
        }
        selected
        tags {
          name
          description
          __typename
        }
        __typename
      }
      isPublic
      isCoreTemplate
      __typename
    }
  }
`;
export const getCoreClassTemplates = /* GraphQL */ `
  query GetCoreClassTemplates($isCoreTemplate: Boolean!) {
    getCoreClassTemplates(isCoreTemplate: $isCoreTemplate) {
      owner {
        id
        username
        email
        __typename
      }
      name
      class {
        name
        description
        __typename
      }
      look {
        name
        description
        tags {
          name
          description
          __typename
        }
        __typename
      }
      level
      xp
      armor
      hitPointsMax
      hitPointsCurrent
      conditions
      damage {
        name
        __typename
      }
      tags {
        name
        description
        __typename
      }
      alignment {
        name
        description
        tags {
          name
          description
          __typename
        }
        class {
          name
          description
          __typename
        }
        __typename
      }
      race {
        name
        description
        tags {
          name
          description
          __typename
        }
        class {
          name
          description
          __typename
        }
        __typename
      }
      abilityScores {
        strength {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        dexterity {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        constitution {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        intelligence {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        wisdom {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        charisma {
          name
          shortName
          value
          bonus
          debility
          debilityPenalty
          __typename
        }
        __typename
      }
      bonds {
        description
        tags {
          name
          description
          __typename
        }
        __typename
      }
      startingMoves {
        move {
          name
          description
          __typename
        }
        selected
        tags {
          name
          description
          __typename
        }
        __typename
      }
      twoToTenMoves {
        move {
          name
          description
          __typename
        }
        selected
        tags {
          name
          description
          __typename
        }
        __typename
      }
      sixToTenMoves {
        move {
          name
          description
          __typename
        }
        selected
        tags {
          name
          description
          __typename
        }
        __typename
      }
      coin
      loadMax
      loadCurrent
      gear {
        gear {
          name
          description
          uses
          weight
          __typename
        }
        selected
        tags {
          name
          description
          __typename
        }
        __typename
      }
      spells {
        spell {
          name
          level
          type
          ongoing
          description
          __typename
        }
        selected
        tags {
          name
          description
          __typename
        }
        __typename
      }
      isPublic
      isCoreTemplate
      __typename
    }
  }
`;
export const getClasses = /* GraphQL */ `
  query GetClasses {
    getClasses {
      name
      description
      __typename
    }
  }
`;
export const getSpells = /* GraphQL */ `
  query GetSpells {
    getSpells {
      name
      level
      type
      ongoing
      description
      class {
        name
        description
        __typename
      }
      __typename
    }
  }
`;
export const getSpellsByClass = /* GraphQL */ `
  query GetSpellsByClass($className: String!) {
    getSpellsByClass(className: $className) {
      name
      level
      type
      ongoing
      description
      class {
        name
        description
        __typename
      }
      __typename
    }
  }
`;
export const getDiceTypes = /* GraphQL */ `
  query GetDiceTypes {
    getDiceTypes {
      name
      __typename
    }
  }
`;
export const getRaces = /* GraphQL */ `
  query GetRaces {
    getRaces {
      name
      description
      tags {
        name
        description
        __typename
      }
      class {
        name
        description
        __typename
      }
      __typename
    }
  }
`;
export const getMoves = /* GraphQL */ `
  query GetMoves {
    getMoves {
      name
      description
      class {
        name
        description
        __typename
      }
      __typename
    }
  }
`;
export const getMovesByClass = /* GraphQL */ `
  query GetMovesByClass($className: String!) {
    getMovesByClass(className: $className) {
      name
      description
      class {
        name
        description
        __typename
      }
      __typename
    }
  }
`;
