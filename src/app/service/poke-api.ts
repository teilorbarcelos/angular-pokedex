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
}
