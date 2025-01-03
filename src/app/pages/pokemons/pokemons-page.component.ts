import { ApplicationRef, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from "../../pokemons/components/pokemon-list/pokemon-list.component";
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon.interface';

@Component({
  selector: 'pokemons-page',
  standalone: true,
  imports: [PokemonListComponent],
  templateUrl: './pokemons-page.component.html'
})
export default class PokemonsPageComponent implements OnInit {

  protected isLoading = signal(true);
  private pokemonService = inject(PokemonsService);
  protected pokemons = signal<SimplePokemon[]>([]);


  ngOnInit(): void {
    this.loadPokemons();
  }


  protected loadPokemons(page: number = 0){
    this.pokemonService.loadPage(page)
      .subscribe(this.pokemons.set);
  }

}
