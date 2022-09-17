import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { forkJoin } from 'rxjs'
import { PokemonInfoProps } from 'src/app/service/poke-api'
import { PokeApiService } from 'src/app/service/poke-api.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private pokeUrl: string = 'https://pokeapi.co/api/v2/pokemon'
  private nameUrl: string = 'https://pokeapi.co/api/v2/pokemon-species'

  public pokemon: any
  public isLoading: boolean = true
  public apiError: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService,
  ) {}

  ngOnInit(): void {
    this.getPokemon()
  }

  public getPokemon() {
    const id = this.activatedRoute.snapshot.params['id']
    const pokemon = this.pokeApiService.apiGetPokemon(`${this.pokeUrl}/${id}`)
    const name = this.pokeApiService.apiGetPokemon(`${this.nameUrl}/${id}`)

    return forkJoin([pokemon, name]).subscribe({
      next: (response) => {
        this.pokemon = response
        this.isLoading = false
      },
      error: (error) => (this.apiError = true),
    })
  }
}
