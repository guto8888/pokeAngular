import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeListService {
  pokeInfo: any = []
  pokeArr: any[] = []

  constructor(private httpClient: HttpClient) {
    this.findPokeList()
  }

   findPokeList() {
    this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon').subscribe((pokeInfo: { results: string[] }) => {
      pokeInfo.results.forEach((pokeUrl: any) => {
        this.httpClient.get<any>(pokeUrl.url).subscribe(pokeData => {
            this.pokeArr = [...this.pokeArr, {position: pokeData.id ,img: pokeData.sprites.other.dream_world.front_default, name: pokeData.name, id: pokeData.id}]
        })
      });
   })
  } 

  dataSearch(id: string) {
    this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe((i) => {
      this.pokeInfo = [i]
   })
  }
}
