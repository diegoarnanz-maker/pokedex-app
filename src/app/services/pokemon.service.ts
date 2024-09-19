import { Injectable } from '@angular/core';
import { Resultado } from '../models/pokeapi';
import { Pokemon } from '../models/pokemon';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  //Obtener pokemon de una lista
  // La api entrega pokemon de 20 en 20
  // async va con await, para funciones asincronas
  async getBypage(page: number, size: number = 40): Promise<Resultado[]> {
    const offset = size*(page-1);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon//?limit=${size}&offset=${offset}`)
    const resJson = await res.json();
    // console.log(resJson);
    if(resJson.results.length > 0) return resJson.results;
    return [];
  }

  async getById(id: string):Promise<Pokemon>{
    // https://pokeapi.co/api/v2/pokemon/
    // IMPORTANTE: poner back stript `` (fn + esc)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const resJson = await res.json();
    // console.log(resJson);
    return resJson;
  }

  getDescripcion() {

  }

}
