/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCharacter = /* GraphQL */ `query GetCharacter($characterId: ID!) {
  getCharacter(characterId: $characterId) {
    userId
    id
    name
    level
    xp
    armor
    hitPointsMax
    hitPointsCurrent
    coin
    loadMax
    loadCurrent
    isPublic
    isCoreTemplate
    spells {
      id
      selected
      tags
      __typename
    }
    gear {
      id
      uses
      tags
      __typename
    }
    sixToTenMoves {
      id
      selected
      __typename
    }
    twoToTenMoves {
      id
      selected
      __typename
    }
    startingMoves {
      id
      selected
      __typename
    }
    bonds {
      id
      description
      selected
      __typename
    }
    abilityscores {
      value
      bonus
      tags
      __typename
    }
    race {
      id
      __typename
    }
    alignment {
      id
      selected
      __typename
    }
    tags
    conditionTypes {
      id
      __typename
    }
    look {
      id
      __typename
    }
    class {
      id
      __typename
    }
    notes
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCharacterQueryVariables,
  APITypes.GetCharacterQuery
>;
export const getUserCharacters = /* GraphQL */ `query GetUserCharacters($userId: ID!) {
  getUserCharacters(userId: $userId) {
    userId
    id
    name
    level
    xp
    armor
    hitPointsMax
    hitPointsCurrent
    coin
    loadMax
    loadCurrent
    isPublic
    isCoreTemplate
    spells {
      id
      selected
      tags
      __typename
    }
    gear {
      id
      uses
      tags
      __typename
    }
    sixToTenMoves {
      id
      selected
      __typename
    }
    twoToTenMoves {
      id
      selected
      __typename
    }
    startingMoves {
      id
      selected
      __typename
    }
    bonds {
      id
      description
      selected
      __typename
    }
    abilityscores {
      value
      bonus
      tags
      __typename
    }
    race {
      id
      __typename
    }
    alignment {
      id
      selected
      __typename
    }
    tags
    conditionTypes {
      id
      __typename
    }
    look {
      id
      __typename
    }
    class {
      id
      __typename
    }
    notes
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserCharactersQueryVariables,
  APITypes.GetUserCharactersQuery
>;
export const getCoreClassTemplates = /* GraphQL */ `query GetCoreClassTemplates {
  getCoreClassTemplates {
    userId
    id
    name
    level
    xp
    armor
    hitPointsMax
    hitPointsCurrent
    coin
    loadMax
    loadCurrent
    isPublic
    isCoreTemplate
    spells {
      id
      selected
      tags
      __typename
    }
    gear {
      id
      uses
      tags
      __typename
    }
    sixToTenMoves {
      id
      selected
      __typename
    }
    twoToTenMoves {
      id
      selected
      __typename
    }
    startingMoves {
      id
      selected
      __typename
    }
    bonds {
      id
      description
      selected
      __typename
    }
    abilityscores {
      value
      bonus
      tags
      __typename
    }
    race {
      id
      __typename
    }
    alignment {
      id
      selected
      __typename
    }
    tags
    conditionTypes {
      id
      __typename
    }
    look {
      id
      __typename
    }
    class {
      id
      __typename
    }
    notes
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCoreClassTemplatesQueryVariables,
  APITypes.GetCoreClassTemplatesQuery
>;
export const getClasses = /* GraphQL */ `query GetClasses {
  getClasses {
    id
    name
    description
    source {
      id
      name
      __typename
    }
    damageDiceType {
      id
      name
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetClassesQueryVariables,
  APITypes.GetClassesQuery
>;
export const getSpells = /* GraphQL */ `query GetSpells {
  getSpells {
    id
    name
    level
    type
    ongoing
    description
    source {
      id
      name
      __typename
    }
    class {
      id
      name
      description
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSpellsQueryVariables, APITypes.GetSpellsQuery>;
export const getSpellsByClass = /* GraphQL */ `query GetSpellsByClass($className: String!) {
  getSpellsByClass(className: $className) {
    id
    name
    level
    type
    ongoing
    description
    source {
      id
      name
      __typename
    }
    class {
      id
      name
      description
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSpellsByClassQueryVariables,
  APITypes.GetSpellsByClassQuery
>;
export const getDiceTypes = /* GraphQL */ `query GetDiceTypes {
  getDiceTypes {
    id
    name
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDiceTypesQueryVariables,
  APITypes.GetDiceTypesQuery
>;
export const getRaces = /* GraphQL */ `query GetRaces {
  getRaces {
    id
    name
    description
    class {
      id
      name
      description
      __typename
    }
    source {
      id
      name
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRacesQueryVariables, APITypes.GetRacesQuery>;
export const getMoves = /* GraphQL */ `query GetMoves {
  getMoves {
    id
    description
    class {
      id
      name
      description
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMovesQueryVariables, APITypes.GetMovesQuery>;
export const getMovesByClass = /* GraphQL */ `query GetMovesByClass($className: String!) {
  getMovesByClass(className: $className) {
    id
    description
    class {
      id
      name
      description
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMovesByClassQueryVariables,
  APITypes.GetMovesByClassQuery
>;
