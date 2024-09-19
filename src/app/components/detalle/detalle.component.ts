import { Component, Input, Output } from '@angular/core';
import { TarjetaPokemonComponent } from '../tarjeta-pokemon/tarjeta-pokemon.component';
import { Pokemon } from '../../models/pokemon';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
    selector: 'detalle',
    standalone: true,
    templateUrl: './detalle.component.html',
    styleUrl: './detalle.component.scss',
    imports: [TarjetaPokemonComponent, CommonModule]
})
export class DetalleComponent {

  @Input() pokemon?: Pokemon;
  @Input() abierto: boolean = false;

  @Output() clicked = new EventEmitter();

  // constructor(private pokemonService: PokemonService) {}

}
