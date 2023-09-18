import { Component } from '@angular/core';
import { PokeListService } from '../poke-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-main',
  templateUrl: './poke-main.component.html',
  styleUrls: ['./poke-main.component.css']
})
export class PokeMainComponent{

  displayedColumns: string[] = ['Imagem', 'Nome', 'Botao']

  constructor(public pokeList: PokeListService, private router: Router) {
  }

  redirect(id: number) {
    this.router.navigate(['index/info/', id])
  }
}

