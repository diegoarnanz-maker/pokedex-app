import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FotoPokemonComponent } from '../../components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from '../../components/tarjeta-pokemon/tarjeta-pokemon.component';
import { DetalleComponent } from '../../components/detalle/detalle.component';
import { PokemonService } from '../../services/pokemon.service';
import { Resultado } from '../../models/pokeapi';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FotoPokemonComponent, TarjetaPokemonComponent, DetalleComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokemonService) {}

  //usamos el id tarjetas para que al hacer scroll vaya cargando
  @ViewChild('tarjetas') tarjetasElement!: ElementRef;

  listaPokemon: Resultado[] = [];

  // Variables:
  
  pagina: number = 1; // Contador de paginas
  pokemonSeleccionado?: Pokemon;
  detalle: boolean = false;


  ngOnInit(): void {
    // this.pokem(onService.getBypage();
    this.cargarLista();
    //  Probamos a ver si al inizializar busca el id
    // this.pokemonService.getById("1");
  }
  
  async cargarLista() {
    this.listaPokemon = [...this.listaPokemon, ...await this.pokemonService.getBypage(this.pagina)];
    //creamos la interfac con los atributos que proporciona la api
    console.log(this.listaPokemon);
    this.pagina++;
  }

  // Evento para que cargue de 40 en 40 objetos
  onScroll(e:any){
    if(
      Math.round(
        this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop
        )
        === e.srcElement.scrollHeight){
          this.cargarLista();
        }

  }

  // Imprime en consola el id del pokemon clickeado
  async tarjetaClickeada(id: string) {
    // console.log(id);
    this.pokemonSeleccionado = await this.pokemonService.getById(id);
  }

  // Desplegar componente detalle
  cambiarEstadoDetalle() {
    // si hay pokemon seleccionado se puede cambiar
    // if(this.pokemonSeleccionado)
    this.detalle = !this.detalle;
    console.log(this.detalle);
  }

}
