import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SimplePokemon } from '../interfaces/simple-pokemon.interface';
import { map, Observable, tap } from 'rxjs';
import { PokeApiResponse } from '../interfaces/pokemon-api.response';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private http = inject(HttpClient);
    
  constructor(){}

  public loadPage(page: number): Observable<SimplePokemon[]>{
    if( page !== 0 ) --page;
    page = Math.max(0, page);

    return this.http.get<PokeApiResponse>(`https://pokeapi.co/api/v2/pokemon/?offset=${page * 20}&limit=20`)
      .pipe(
        map( r => {
          const pokemons:SimplePokemon[] = r.results.map( p => ({
            id: p.url.split('/').at(-2) ?? '',
            name: p.name
          }));

          return pokemons;
        }),
        // tap(console.log)
      )
  }
}
