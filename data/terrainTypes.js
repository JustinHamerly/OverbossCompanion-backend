const terrainTypes = new Map();

terrainTypes.set(
  'forest',
  {
    terrain: "Forest",
    creature: "Kobold",
    creatureName: "kobold",
    tileDesc: {
      text: "The forests of Arcadia are dark and deep, and the more you have, the darker and deeper they are.  Kobolds prefer forests.",
      points: "Players receive a total number of points depending on the number of Forest Tiles they have on their map, up to 5 tiles.",
      score: '1/3/6/10/15'
    }
  }
);

terrainTypes.set(
  'cave',
  {
    terrain: "Cave",
    creature: "Dragon",
    creatureName: "dragon",
    tileDesc: {
      text: "Caves are the natural lairs of dragons and other beasties;  they are at their most powerful when hidden within mountains.",
      points: "Each Cave is worth 1 base point.  A Cave bordering any mountainous edge of the map is worth an additional 2 points, for a maximum value of 3 points"
    }
  }
);

terrainTypes.set(
  'graveyard',
  {
    terrain: "Graveyard",
    creature: 'Skeleton',
    creatureName: "skeleton",
    tileDesc: {
      text: "Skeletons, ghouls, and ghosts prowl Arcadia's cemeteries.  The Boss who owns the most Graveyards is king of the undead!",
      points: "Each Graveyard has a base value worth between 1 and 3 points.  Additionally, at the end of the game, the player with the most Graveyard tiles scores 5 points, and the player with the second most Graveyard tiles scores 2.  If two or more players are tied for either first or second place, all of them receive that place's points."
    },
    variants: [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3]
  }
);

terrainTypes.set(
  'swamp',
  {
    terrain: "Swamp",
    creature: "Witch",
    creatureName: "witch",
    tileDesc: {
      text: "Wet and loathsome, Swamps spread wherever there is water and rot.  Swamps are home to Arcadia's Witches.",
      points: "Each Swamp is worth 1 base point.  It is also worth 1 additional point if it borders a watery edge of the map, and 1 additional point if it is next to at least one other Swamp tile, for a maximum value of 3 points."
    }
  }
);

terrainTypes.set(
  'camp',
  {
    terrain: "Camp",
    creature: "Orc",
    creatureName: "orc",
    tileDesc: {
      text: "Orc Camps are intimidating projections of your power, but remember that orcs will never tolerate a rival claim to their tribal systems.",
      points: "Players receive a total number of points based on the number of unique Camp tiles they have on their map, up to 4 unique colors.  Camps are distinguished by the colored flag in their upper right corner.",
      score: '1/4/9/16'
    },
    variants: ["blue", "blue", "red", "red", "orange", "orange", "purple", "purple", "yellow", "yellow", "black", "black"]
  }
)

terrainTypes.set(
  'castle',
  {
    terrain: "Castle",
    creature: "Vampire",
    creatureName: "vampire",
    tileDesc: {
      text: "Castles can be found throughout Arcadia, remnants of a more civilized time.  Now their power comes fromt he vampires who have taken up residence there.",
      points: "Every Castle is worth 2 base points plus another 2 points if it has a vampire on it, for a maximum of 4 points.  This is in addition to the 1 point the vampire would earn for being on its matching type (Castle)."
    }
  }
)

terrainTypes.set(
  'cloudisland',
  {
    terrain: "Cloud Island",
    creature: "Harpy",
    creatureName: "harpy",
    tileDesc: {
      text: "Cloud Islands float high int he sky, their harpy denizens looking down disdainfully ont he world below.",
      points: "Each Cloud Island is worth 7 points minus 1 point for every non-Cloud Island tile TYPE on your map (including Dungeons).  For example, if you have four non-Cloud Island terrain types on your map, each Cloud Island is worth 3 points."
    }
  }
)

terrainTypes.set(
  'desert',
  {
    terrain: "Desert",
    creature: "Sandworm",
    creatureName: "sandworm",
    tileDesc: {
      text: "Deserts are harsh, unending landscapes from which there is often no escape, especially if you are overtaken by a native sandowrm.",
      points: "Deserts are scored based on the size of each CONNECTED group of Desert tiles (see table).  Connected tiles must share a border.",
      table: "Size of Desert group / total points: 1 tile/0, 2 tiles/2, 3 tiles/6, 4 tiles/ 12, 5+ tiles/20"
    }
  }
)

terrainTypes.set(
  'summoningcircle',
  {
    terrain: "Summoning Circle",
    creature: "Sorcerobe",
    creatureName: "sorcerobe",
    tileDesc: {
      text: "The origin of Arcadia's Summoning Circles is shrouded in mystery.  But it's clear that a Boss who learns to weild their arcane powers can control the powerul sorcerobes who live there.",
      points: "Each Summoning Circle is worth 1 point.  when you place a Summoning Circle on your map, you may immedately (on that same turn) exchange either a token placed on top of it, or a token bordering it, with one from the market."
    }
  }
)

terrainTypes.set(
  'volcano',
  {
    terrain: "Volcano",
    creature: "Elemental",
    creatureName: "elemental",
    tileDesc: {
      text: "Arcadia is a tumultuous, ever-changing land, and there s no greater reminder of this than the powerful Volcanoes that can emerge sudeenly and violently, driven by the elementals that call them home.",
      points: "Volcanoes are each worth 4 points.  After placing a Volcano on your map, destroy all bordering Monsters and Minibosses, returning those tokens to the bag."
    }
  }
)

terrainTypes.set(
  'tower',
  {
    terrain: "Tower",
    creature: "Evil Eye",
    creatureName: "evileye",
    tileDesc: {
      text: "",
      points: "Towers may hold up to 3 tokens (Monsters and Minibosses).  When placing a token, you may stack it on this tile, covering up any previous tokens underneath it until the tower reaches its max height of 3 tokens.  Towers are worth 1 base point +1 point per token on it (for 4 points maximum)"
    }
  }
)

module.exports = terrainTypes;