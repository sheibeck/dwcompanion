/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const duplicateCharacter = /* GraphQL */ `
  mutation DuplicateCharacter($characterId: ID!, $newOwnerId: ID!) {
    duplicateCharacter(characterId: $characterId, newOwnerId: $newOwnerId) {
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
