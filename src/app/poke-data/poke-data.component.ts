import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeListService } from '../poke-list.service';


@Component({
  selector: 'app-poke-data',
  templateUrl: './poke-data.component.html',
  styleUrls: ['./poke-data.component.css']
})
export class PokeDataComponent implements OnInit{

  displayedColumns: string[] = ['Aparencia', 'Nome', 'Tipo', 'Altura', 'Peso', 'Habilidades'];

  id!: string

  constructor(private route: ActivatedRoute, public PokeList: PokeListService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = String(paramMap.get('id'))
      this.PokeList.dataSearch(this.id)
    })
}

}
