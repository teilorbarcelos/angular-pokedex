import { Component, OnInit } from '@angular/core'
import { PokeApiPaginatedListResultItemProps } from 'src/app/service/poke-api'
import { PokeApiService } from 'src/app/service/poke-api.service'

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: PokeApiPaginatedListResultItemProps[] = [] as PokeApiPaginatedListResultItemProps[]
  public getAllPokemons: PokeApiPaginatedListResultItemProps[] = [] as PokeApiPaginatedListResultItemProps[]
  public apiError: boolean = false
  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe({
      next: (response) => {
        this.setAllPokemons = response.results
        this.getAllPokemons = this.setAllPokemons
      },
      error: (error) => (this.apiError = true),
    })
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter(
      (pokemon) => !pokemon.name.indexOf(value.toLowerCase()),
    )
    this.getAllPokemons = filter
  }
}
