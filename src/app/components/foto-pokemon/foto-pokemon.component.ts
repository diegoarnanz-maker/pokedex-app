import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'foto-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './foto-pokemon.component.html',
  styleUrl: './foto-pokemon.component.scss'
})
export class FotoPokemonComponent {

  @Input() pokemon?: Pokemon;

}
