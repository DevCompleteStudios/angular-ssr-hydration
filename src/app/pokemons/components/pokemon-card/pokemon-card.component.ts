import { Component, computed, effect, input } from '@angular/core';
import { SimplePokemon } from '../../interfaces/simple-pokemon.interface';

@Component({
  selector: 'pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html'
})
export class PokemonCardComponent {

  public pokemon = input.required<SimplePokemon>();

  // private logEffect = effect(() => {
  //   console.log('Pokemon card ', this.pokemon());
  // });

  protected readonly pokemonImage = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon().id}.png`);

}
