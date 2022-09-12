import { Component, OnInit } from '@angular/core'
import { PokeApiPaginatedListResultItemProps } from 'src/app/service/poke-api'
import { PokeApiService } from 'src/app/service/poke-api.service'

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  public getAllPokemons: PokeApiPaginatedListResultItemProps[] = [] as PokeApiPaginatedListResultItemProps[]
  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe({
      next: (response) => {
        this.getAllPokemons = response.results
        console.log(this.getAllPokemons)
      },
    })
  }
}
