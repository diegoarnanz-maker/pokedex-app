import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import { Resultado } from '../../models/pokeapi';
import { PokemonService } from '../../services/pokemon.service';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'tarjeta-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrl: './tarjeta-pokemon.component.scss'
})

//OnChanges: funcion que se ejecuta cada vez que se recive alguna data nueva de los input
export class TarjetaPokemonComponent implements OnChanges{

  constructor(private pokemonService: PokemonService){}

  ngOnChanges(): void {
    this.extraerInformacion();
  }

  

  @Input() data!: Resultado;
  @Input() seleccionado:boolean = false;
  @Output() clickeado = new EventEmitter<string>()

  id: string = "";

  //no existe atributo id, hay que crear una funcion para extraerlo de la url 
  extraerInformacion(){
    if(this.data){

      //extraemos id
      this.id = this.data.url.substring(34, this.data.url.length-1)
      // this.pokemonService.getById(this.id)
    }
  }


  // Función para convertir a titlecase
  toTitleCase(str: string): string {
    if (!str) return '';
    return str.toLowerCase().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
}
