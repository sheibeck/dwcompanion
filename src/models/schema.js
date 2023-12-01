export const schema = {
    "models": {
        "User": {
            "name": "User",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Users",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Source": {
            "name": "Source",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Sources",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "CharacterClass": {
            "name": "CharacterClass",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "class": {
                    "name": "class",
                    "isArray": false,
                    "type": {
                        "model": "Class"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterClassClassId"
                        ]
                    }
                },
                "character": {
                    "name": "character",
                    "isArray": false,
                    "type": {
                        "model": "Character"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterClassCharacterId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "characterClassClassId": {
                    "name": "characterClassClassId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "characterClassCharacterId": {
                    "name": "characterClassCharacterId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "classCharactersId": {
                    "name": "classCharactersId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "CharacterClasses",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Class.characters",
                        "fields": [
                            "classCharactersId"
                        ]
                    }
                }
            ]
        },
        "Class": {
            "name": "Class",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "source": {
                    "name": "source",
                    "isArray": false,
                    "type": {
                        "model": "Source"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "classSourceId"
                        ]
                    }
                },
                "damageDiceType": {
                    "name": "damageDiceType",
                    "isArray": false,
                    "type": {
                        "model": "DiceType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "classDamageDiceTypeId"
                        ]
                    }
                },
                "characters": {
                    "name": "characters",
                    "isArray": true,
                    "type": {
                        "model": "CharacterClass"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "classCharactersId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "classSourceId": {
                    "name": "classSourceId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "classDamageDiceTypeId": {
                    "name": "classDamageDiceTypeId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Classes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Spell": {
            "name": "Spell",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "level": {
                    "name": "level",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ongoing": {
                    "name": "ongoing",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "source": {
                    "name": "source",
                    "isArray": false,
                    "type": {
                        "model": "Source"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "spellSourceId"
                        ]
                    }
                },
                "class": {
                    "name": "class",
                    "isArray": false,
                    "type": {
                        "model": "Class"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "spellClassId"
                        ]
                    }
                },
                "characters": {
                    "name": "characters",
                    "isArray": true,
                    "type": {
                        "model": "CharacterSpell"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "spellCharactersId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "spellSourceId": {
                    "name": "spellSourceId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "spellClassId": {
                    "name": "spellClassId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Spells",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "CharacterSpell": {
            "name": "CharacterSpell",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "character": {
                    "name": "character",
                    "isArray": false,
                    "type": {
                        "model": "Character"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterSpellCharacterId"
                        ]
                    }
                },
                "spell": {
                    "name": "spell",
                    "isArray": false,
                    "type": {
                        "model": "Spell"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterSpellSpellId"
                        ]
                    }
                },
                "selected": {
                    "name": "selected",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "spellCharactersId": {
                    "name": "spellCharactersId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "characterSpellCharacterId": {
                    "name": "characterSpellCharacterId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "characterSpellSpellId": {
                    "name": "characterSpellSpellId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "characterSpellsId": {
                    "name": "characterSpellsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "CharacterSpells",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Spell.characters",
                        "fields": [
                            "spellCharactersId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Character.spells",
                        "fields": [
                            "characterSpellsId"
                        ]
                    }
                }
            ]
        },
        "CharacterGear": {
            "name": "CharacterGear",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "gear": {
                    "name": "gear",
                    "isArray": false,
                    "type": {
                        "model": "Gear"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterGearGearId"
                        ]
                    }
                },
                "uses": {
                    "name": "uses",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "character": {
                    "name": "character",
                    "isArray": false,
                    "type": {
                        "model": "Character"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterGearCharacterId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "characterGearGearId": {
                    "name": "characterGearGearId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "characterGearCharacterId": {
                    "name": "characterGearCharacterId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "gearCharactersId": {
                    "name": "gearCharactersId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "characterGearId": {
                    "name": "characterGearId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "CharacterGears",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Gear.characters",
                        "fields": [
                            "gearCharactersId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Character.gear",
                        "fields": [
                            "characterGearId"
                        ]
                    }
                }
            ]
        },
        "Gear": {
            "name": "Gear",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "uses": {
                    "name": "uses",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "characters": {
                    "name": "characters",
                    "isArray": true,
                    "type": {
                        "model": "CharacterGear"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "gearCharactersId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Gears",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "CharacterMove": {
            "name": "CharacterMove",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "selected": {
                    "name": "selected",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "move": {
                    "name": "move",
                    "isArray": false,
                    "type": {
                        "model": "Move"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterMoveMoveId"
                        ]
                    }
                },
                "character": {
                    "name": "character",
                    "isArray": false,
                    "type": {
                        "model": "Character"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterMoveCharacterId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "characterMoveMoveId": {
                    "name": "characterMoveMoveId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "characterMoveCharacterId": {
                    "name": "characterMoveCharacterId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "moveCharactersId": {
                    "name": "moveCharactersId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "characterSixToTenMovesId": {
                    "name": "characterSixToTenMovesId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "characterTwoToTenMovesId": {
                    "name": "characterTwoToTenMovesId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "characterStartingMovesId": {
                    "name": "characterStartingMovesId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "CharacterMoves",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Move.characters",
                        "fields": [
                            "moveCharactersId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Character.sixToTenMoves",
                        "fields": [
                            "characterSixToTenMovesId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Character.twoToTenMoves",
                        "fields": [
                            "characterTwoToTenMovesId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Character.startingMoves",
                        "fields": [
                            "characterStartingMovesId"
                        ]
                    }
                }
            ]
        },
        "Move": {
            "name": "Move",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "class": {
                    "name": "class",
                    "isArray": false,
                    "type": {
                        "model": "Class"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "moveClassId"
                        ]
                    }
                },
                "characters": {
                    "name": "characters",
                    "isArray": true,
                    "type": {
                        "model": "CharacterMove"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "moveCharactersId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "moveClassId": {
                    "name": "moveClassId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Moves",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "CharacterBond": {
            "name": "CharacterBond",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "bond": {
                    "name": "bond",
                    "isArray": false,
                    "type": {
                        "model": "Bond"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterBondBondId"
                        ]
                    }
                },
                "selected": {
                    "name": "selected",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "character": {
                    "name": "character",
                    "isArray": false,
                    "type": {
                        "model": "Character"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterBondCharacterId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "characterBondBondId": {
                    "name": "characterBondBondId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "characterBondCharacterId": {
                    "name": "characterBondCharacterId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "bondCharactersId": {
                    "name": "bondCharactersId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "abilityScoreCharactersId": {
                    "name": "abilityScoreCharactersId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "characterBondsId": {
                    "name": "characterBondsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "CharacterBonds",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Bond.characters",
                        "fields": [
                            "bondCharactersId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-AbilityScore.characters",
                        "fields": [
                            "abilityScoreCharactersId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Character.bonds",
                        "fields": [
                            "characterBondsId"
                        ]
                    }
                }
            ]
        },
        "Bond": {
            "name": "Bond",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "class": {
                    "name": "class",
                    "isArray": false,
                    "type": {
                        "model": "Class"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "bondClassId"
                        ]
                    }
                },
                "characters": {
                    "name": "characters",
                    "isArray": true,
                    "type": {
                        "model": "CharacterBond"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "bondCharactersId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "bondClassId": {
                    "name": "bondClassId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Bonds",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "CharacterAbilityScore": {
            "name": "CharacterAbilityScore",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "abilityScore": {
                    "name": "abilityScore",
                    "isArray": false,
                    "type": {
                        "model": "AbilityScore"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterAbilityScoreAbilityScoreId"
                        ]
                    }
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "bonus": {
                    "name": "bonus",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "character": {
                    "name": "character",
                    "isArray": false,
                    "type": {
                        "model": "Character"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterAbilityScoreCharacterId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "characterAbilityScoreAbilityScoreId": {
                    "name": "characterAbilityScoreAbilityScoreId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "characterAbilityScoreCharacterId": {
                    "name": "characterAbilityScoreCharacterId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "characterAbilityscoresId": {
                    "name": "characterAbilityscoresId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "CharacterAbilityScores",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Character.abilityscores",
                        "fields": [
                            "characterAbilityscoresId"
                        ]
                    }
                }
            ]
        },
        "AbilityScore": {
            "name": "AbilityScore",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "shortName": {
                    "name": "shortName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "debility": {
                    "name": "debility",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "debilityPenalty": {
                    "name": "debilityPenalty",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "characters": {
                    "name": "characters",
                    "isArray": true,
                    "type": {
                        "model": "CharacterBond"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "abilityScoreCharactersId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "AbilityScores",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "CharacterRace": {
            "name": "CharacterRace",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": {
                        "model": "Race"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterRaceRaceId"
                        ]
                    }
                },
                "character": {
                    "name": "character",
                    "isArray": false,
                    "type": {
                        "model": "Character"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterRaceCharacterId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "characterRaceRaceId": {
                    "name": "characterRaceRaceId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "characterRaceCharacterId": {
                    "name": "characterRaceCharacterId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "raceCharactersId": {
                    "name": "raceCharactersId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "CharacterRaces",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Race.characters",
                        "fields": [
                            "raceCharactersId"
                        ]
                    }
                }
            ]
        },
        "Race": {
            "name": "Race",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "class": {
                    "name": "class",
                    "isArray": false,
                    "type": {
                        "model": "Class"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "raceClassId"
                        ]
                    }
                },
                "source": {
                    "name": "source",
                    "isArray": false,
                    "type": {
                        "model": "Source"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "raceSourceId"
                        ]
                    }
                },
                "characters": {
                    "name": "characters",
                    "isArray": true,
                    "type": {
                        "model": "CharacterRace"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "raceCharactersId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "raceClassId": {
                    "name": "raceClassId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "raceSourceId": {
                    "name": "raceSourceId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Races",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "CharacterAlignment": {
            "name": "CharacterAlignment",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "alignment": {
                    "name": "alignment",
                    "isArray": false,
                    "type": {
                        "model": "Alignment"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterAlignmentAlignmentId"
                        ]
                    }
                },
                "selected": {
                    "name": "selected",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "character": {
                    "name": "character",
                    "isArray": false,
                    "type": {
                        "model": "Character"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterAlignmentCharacterId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "characterAlignmentAlignmentId": {
                    "name": "characterAlignmentAlignmentId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "characterAlignmentCharacterId": {
                    "name": "characterAlignmentCharacterId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "alignmentCharactersId": {
                    "name": "alignmentCharactersId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "CharacterAlignments",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Alignment.characters",
                        "fields": [
                            "alignmentCharactersId"
                        ]
                    }
                }
            ]
        },
        "Alignment": {
            "name": "Alignment",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "class": {
                    "name": "class",
                    "isArray": false,
                    "type": {
                        "model": "Class"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "alignmentClassId"
                        ]
                    }
                },
                "characters": {
                    "name": "characters",
                    "isArray": true,
                    "type": {
                        "model": "CharacterAlignment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "alignmentCharactersId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "alignmentClassId": {
                    "name": "alignmentClassId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Alignments",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "DiceType": {
            "name": "DiceType",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "DiceTypes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "CharacterLook": {
            "name": "CharacterLook",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "look": {
                    "name": "look",
                    "isArray": true,
                    "type": {
                        "model": "Look"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "characterLookLookId"
                        ]
                    }
                },
                "character": {
                    "name": "character",
                    "isArray": false,
                    "type": {
                        "model": "Character"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterLookCharacterId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "characterLookCharacterId": {
                    "name": "characterLookCharacterId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "lookCharactersId": {
                    "name": "lookCharactersId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "CharacterLooks",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Look.characters",
                        "fields": [
                            "lookCharactersId"
                        ]
                    }
                }
            ]
        },
        "Look": {
            "name": "Look",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "class": {
                    "name": "class",
                    "isArray": false,
                    "type": {
                        "model": "Class"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "lookClassId"
                        ]
                    }
                },
                "characters": {
                    "name": "characters",
                    "isArray": true,
                    "type": {
                        "model": "CharacterLook"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "lookCharactersId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "characterLookLookId": {
                    "name": "characterLookLookId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "lookClassId": {
                    "name": "lookClassId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Looks",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-CharacterLook.look",
                        "fields": [
                            "characterLookLookId"
                        ]
                    }
                }
            ]
        },
        "Character": {
            "name": "Character",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "userId": {
                    "name": "userId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "level": {
                    "name": "level",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "xp": {
                    "name": "xp",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "armor": {
                    "name": "armor",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "hitPointsMax": {
                    "name": "hitPointsMax",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "hitPointsCurrent": {
                    "name": "hitPointsCurrent",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "coin": {
                    "name": "coin",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "loadMax": {
                    "name": "loadMax",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "loadCurrent": {
                    "name": "loadCurrent",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "isPublic": {
                    "name": "isPublic",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "isCoreTemplate": {
                    "name": "isCoreTemplate",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "spells": {
                    "name": "spells",
                    "isArray": true,
                    "type": {
                        "model": "CharacterSpell"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "characterSpellsId"
                        ]
                    }
                },
                "gear": {
                    "name": "gear",
                    "isArray": true,
                    "type": {
                        "model": "CharacterGear"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "characterGearId"
                        ]
                    }
                },
                "sixToTenMoves": {
                    "name": "sixToTenMoves",
                    "isArray": true,
                    "type": {
                        "model": "CharacterMove"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "characterSixToTenMovesId"
                        ]
                    }
                },
                "twoToTenMoves": {
                    "name": "twoToTenMoves",
                    "isArray": true,
                    "type": {
                        "model": "CharacterMove"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "characterTwoToTenMovesId"
                        ]
                    }
                },
                "startingMoves": {
                    "name": "startingMoves",
                    "isArray": true,
                    "type": {
                        "model": "CharacterMove"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "characterStartingMovesId"
                        ]
                    }
                },
                "bonds": {
                    "name": "bonds",
                    "isArray": true,
                    "type": {
                        "model": "CharacterBond"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "characterBondsId"
                        ]
                    }
                },
                "abilityscores": {
                    "name": "abilityscores",
                    "isArray": true,
                    "type": {
                        "model": "CharacterAbilityScore"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "characterAbilityscoresId"
                        ]
                    }
                },
                "race": {
                    "name": "race",
                    "isArray": false,
                    "type": {
                        "model": "CharacterRace"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterRaceId"
                        ]
                    }
                },
                "alignment": {
                    "name": "alignment",
                    "isArray": false,
                    "type": {
                        "model": "CharacterAlignment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterAlignmentId"
                        ]
                    }
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "look": {
                    "name": "look",
                    "isArray": false,
                    "type": {
                        "model": "CharacterLook"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterLookId"
                        ]
                    }
                },
                "class": {
                    "name": "class",
                    "isArray": false,
                    "type": {
                        "model": "CharacterClass"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "characterClassId"
                        ]
                    }
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "characterRaceId": {
                    "name": "characterRaceId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "characterAlignmentId": {
                    "name": "characterAlignmentId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "characterLookId": {
                    "name": "characterLookId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "characterClassId": {
                    "name": "characterClassId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Characters",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "codegenVersion": "3.4.4",
    "version": "43571db6415e8d9d59d3398434dd581c"
};