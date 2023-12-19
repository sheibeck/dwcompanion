interface Danger {
    type: string;
    impulses: string[];
    gmMoves: string[];
}


// Function to format Danger information
export function getDangerInfo(dangerType: string): string {
    // Define the Danger information here based on the provided data
    const dangerInfo = dangers;
  
    const danger = dangerInfo.find((d) => d.type === dangerType);
  
    if (!danger) {
      throw new Error(`Danger Type '${dangerType}' not found in the data.`);
    }
  
    return `
      - Impulse: ${danger.impulses}
      - GM Moves:
      ${danger.gmMoves.map((move, index) => `${index + 1}. ${move}`).join('\n')}
    `;
  }

export const dangers: Danger[] = [
{
    type: 'Ambitious Organizations',
    impulses: [
        "Misguided Good (impulse: to do what is “right” no matter the cost)",
        "Thieves Guild (impulse: to take by subterfuge)",
        "Cult (impulse: to infest from within)",
        "Religious Organization (impulse: to establish and follow doctrine)",
        "Corrupt Government (impulse: to maintain the status quo)",
        "Cabal (impulse: to absorb those in power, to grow)",
    ],
    gmMoves: [
        'Attack someone by stealthy means (kidnapping, etc.)',
        'Attack someone directly (with a gang or single assailant)',
        'Absorb or buy out someone important (an ally, perhaps)',
        'Influence a powerful institution (change a law, manipulate doctrine)',
        'Establish a new rule (within the organization)',
        'Claim territory or resources',
        'Negotiate a deal',
        'Observe a potential foe in great detail',
    ],
},
{
    type: 'Planar Forces',
    impulses: ['God (impulse: to gather worshipers)'],
    gmMoves: [
    'Turn an organization (corrupt or infiltrate with influence)',
    'Give dreams of prophecy',
    'Lay a Curse on a foe',
    'Extract a promise in exchange for a boon',
    'Attack indirectly, through intermediaries',
    'Rarely, when the stars are right, attack directly',
    'Foster rivalries with other, similar powers',
    'Expose someone to a Truth, wanted or otherwise',
    ],
},
{
    type: 'Arcane Enemies',
    impulses: ['Lord of the Undead (impulse: to seek true immortality)'],
    gmMoves: [
    'Learn forbidden knowledge',
    'Cast a spell over time and space',
    'Attack a foe with magic, directly or otherwise',
    'Spy on someone with a scrying spell',
    'Recruit a follower or toady',
    'Tempt someone with promises',
    'Demand a sacrifice',
    ],
},
{
    type: 'Hordes',
    impulses: ['Wandering Barbarians (impulse: to grow strong, to drive their enemies before them)'],
    gmMoves: [
    'Assault a bastion of civilization',
    'Embrace internal chaos',
    'Change direction suddenly',
    'Overwhelm a weaker force',
    'Perform a show of dominance',
    'Abandon an old home, find a new one',
    'Grow in size by breeding or conquest',
    'Appoint a champion',
    'Declare war and act upon that declaration without hesitation or deliberation',
    ],
},
{
    type: 'Cursed Places',
    impulses: ['Abandoned Tower (impulse: to draw in the weak-willed)'],
    gmMoves: [
    'Vomit forth a lesser monster',
    'Spread to an adjacent place',
    'Lure someone in',
    'Grow in intensity or depth',
    'Leave a lingering effect on an inhabitant or visitor',
    'Hide something from sight',
    'Offer power',
    'Dampen magic or increase its effects',
    'Confuse or obfuscate truth or direction',
    'Corrupt a natural law',
    ],
},
];

  
export const dangerOptions = dangers.map((danger, index) => {
    return `        ${index+1}. Danger Type: ${danger.type}, Impluses: ${danger.impulses.join(",")}, Moves: ${danger.gmMoves.join(",")}`;
  }).join('\n');
