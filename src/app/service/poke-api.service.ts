import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, tap } from 'rxjs'
import { PokeApiPaginatedListProps } from './poke-api'

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100'
  constructor(private http: HttpClient) {}

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<PokeApiPaginatedListProps>(this.url).pipe(
      tap((response) => response),
      tap((response) => console.log(response)),
    )
  }
}
