export type Ability = {
  id: number;
  is_main_series: boolean;
  name: string;
}

export type PokemonAbility = {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export type PokemonFormType = {
  slot: number;
  type: FormType;
}

export type Name = {
  name: string;
  url: string;
}

export type Region = {
  id: number;
  locations: Location[];
  main_generation: Generation;
  name: string;
  names: Name[];
  pokedexes: Pokedex[];
  version_groups: VersionGroup[];
}

export type Generation = {
  abilities: Ability;
  id: number;
  main_region: Region;
  moves: Move;
  name: string;
  names: Name;
  pokemon_species: PokemonSpecies;
  types: FormType;
  version_groups: VersionGroup;
}

export type TypeRelationsPast = {
  damage_relations: TypeRelations;
  generation: Generation;
}

export type TypeRelations = {
  double_damage_from: FormType;
  double_damage_to: FormType;
  half_damage_from: FormType;
  half_damage_to: FormType;
  no_damage_from: FormType;
  no_damage_to: FormType;
}

export type MoveDamageClass = {
  id: number;
  name: string;
  descriptions: Description[];
  moves: Move[];
  names: Name[];
}

export type GenerationGameIndex = {
  game_index: number;
  generation: Generation;
}

export type FormType = {
  damage_relations: TypeRelations;
  game_indices: GenerationGameIndex[];
  generation: Generation;
  id: number;
  move_damage_class: MoveDamageClass;
  moves: Move[];
  name: string;
  names: Name[];
  past_damage_relations: TypeRelationsPast[];
  pokemon: TypePokemon;
}

export type TypePokemon = {
  pokemon: Pokemon;
  slot: number;
}

export type PokemonTypePast = {
  generation: Generation;
  types: PokemonType;
}

export type PokemonFormSprites = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export type PokemonForm = {
  form_name: string;
  form_names: Name;
  form_order: number;
  id: number;
  is_battle_only: boolean;
  is_default: boolean;
  is_mega: boolean;
  name: string;
  names: Name;
  order: number;
  pokemon: PokemonType;
  sprites: PokemonFormSprites;
  types: PokemonFormType;
  version_group: VersionGroup;
}

export type Pokedex = {
  id: number;
  name: string;
}

export type PokemonMove = {
  move: Move
  version_group_details: PokemonMoveVersion[];
}

export type Language = {
  id: number;
  iso3166: string;
  iso639: string;
  name: string;
  names: Name[];
  official: boolean;
}

export type Description = {
  description: string;
  language: Language;
}

export type MoveLearnMethod = {
  descriptions: Description;
  id: number;
  name: string;
  names: Name;
  version_groups: VersionGroup;
}

export type PokemonMoveVersion = {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod[];
  version_group: VersionGroup;
}

export type Effect = {
  effect: string;
  language: Language;
}

export type ItemFlingEffect = {
  effect_entries: Effect[];
  id: number;
  items: Item[];
  name: string;
}

export type ItemAttribute = {
  descriptions: Description[];
  id: number;
  items: Item[];
  name: string;
  names: Name[];
}

export type ItemPocket = {
  categories: ItemCategory[];
  id: number;
  name: string;
  names: Name[];
}

export type ItemCategory = {
  id: number;
  name: string;
  items: Item[];
  names: Name[];
  pocket: ItemPocket;
}

export type VerboseEffect = {
  effect: string;
  short_effect: string;
  language: Language;
}

export type VersionGroupFlavorText = {
  text: string;
  language: Language;
  version_group: VersionGroup;
}

export type ItemSprites = {
  default: string;
}

export type ItemHolderPokemonVersionDetail = {
  rarity: number;
  version: Version;
}

export type ItemHolderPokemon = {
  pokemon: Pokemon;
  version_details: ItemHolderPokemonVersionDetail[];
}

export type Item = {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  fling_effect: ItemFlingEffect;
  attributes: ItemAttribute[];
  category: ItemCategory;
  effect_entries: VerboseEffect[];
  flavor_text_entries: VersionGroupFlavorText[];
  game_indices: GenerationGameIndex[];
  names: Name[];
  sprites: ItemSprites;
  held_by_pokemon: ItemHolderPokemon[];
}

export type PokemonHeldItemVersion = {
  version: Version;
  rarity: number;
}

export type PokemonHeldItem = {
  item: Item;
  version_details: PokemonHeldItemVersion[];
}

export type Pokemon = {
  abilities: PokemonAbility[];
  base_experience: number;
  forms: PokemonForm[];
  game_indices: VersionGameIndex[];
  height: number;
  held_items: PokemonHeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  past_types: PokemonTypePast[];
  species: {
    name: string;
    url: string;
  };
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}

export type Move = {
  accuracy: number;
  damage_class: MoveDamageClass;
  effect_chance: number;
  effect_entries: VerboseEffect[];
  generation: Generation;
  id: number;
  learned_by_pokemon: Pokemon[];
  name: string;
  names: Name[];
  power: number;
  pp: number;
  priority: number;
  type: Type;
}

export type Type = {
  name: string;
  url: string;
}

export type PokemonType = {
  slot: number;
  type: Type;
}

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: Stat;
}

export type Stat = {
  game_index: number;
  id: number;
  is_battle_only: boolean;
  move_damage_class: MoveDamageClass;
  name: string;
  names: Name[];
}

export type PokemonSprites = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export type PokemonColor = {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecies[];
}

export type ChainLink = {
  species: PokemonSpecies;
  evolves_to: ChainLink[];
}

export type  EvolutionChain = {
  id: number;
  chain: ChainLink;
}

export type PokemonSpecies = {
  base_happiness: number;
  capture_rate: number;
  color: PokemonColor;
  evolves_from_species: {
    name:string
    url: string;
  };
  evolution_chain: {
    url: string;
  };
  form_descriptions: Description[];
  forms_switchable: boolean;
  gender_rate: number;
  generation: Generation;
  habitat: PokemonHabitat;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
}

export type PokemonHabitat = {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecies[];
}

export type Version = {
  id: number;
  name: string;
  names: Name[];
  version_group: VersionGroup;
}

export type VersionGameIndex = {
  game_index: number;
  version: Version;
}

export type VersionGroup = {
  generation: Generation;
  id: number;
  move_learn_methods: MoveLearnMethod[];
  name: string;
  order: number;
  pokedexes: Pokedex[];
  regions: Region[];
  versions: Version[];
}