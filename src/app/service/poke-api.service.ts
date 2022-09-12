import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, tap, map } from 'rxjs'
import { PokeApiPaginatedListProps, PokemonInfoProps } from './poke-api'

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100'
  constructor(private http: HttpClient) {}

  get apiListAllPokemons(): Observable<PokeApiPaginatedListProps> {
    return this.http.get<PokeApiPaginatedListProps>(this.url).pipe(
      tap((response) => response),
      tap((response) => {
        response.results.map((pokemon) => {
          this.apiGetPokemon(pokemon.url).subscribe({
            next: (response) => (pokemon.info = response),
          })
        })
      }),
    )
  }

  public apiGetPokemon(url: string): Observable<PokemonInfoProps> {
    return this.http
      .get<PokemonInfoProps>(url)
      .pipe((pokemonInfo) => pokemonInfo)
  }
}
