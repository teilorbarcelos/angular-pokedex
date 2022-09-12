export interface PokeApi {}

export interface PokeApiPaginatedListProps {
  count: number
  next: string | null
  previous: string | null
  results: PokeApiPaginatedListResultItemProps[]
}

export interface PokeApiPaginatedListResultItemProps {
  name: string
  url: string
  info?: PokemonInfoProps
}

export interface PokemonInfoProps {
  types: PokemonTypeProps[]
  sprites: PokemonImageProps
  id: number
}

export interface PokemonTypeProps {
  type: { name: string }
}

export interface PokemonImageProps {
  other: { dream_world: { front_default: string } }
}
