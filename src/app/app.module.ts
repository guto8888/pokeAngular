import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeDataComponent } from './poke-data/poke-data.component';
import { PokeMainComponent } from './poke-main/poke-main.component';

import { HttpClientModule } from '@angular/common/http'

import { PokeListService } from './poke-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'
import {MatButtonModule} from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'


@NgModule({
  declarations: [
    AppComponent,
    PokeDataComponent,
    PokeMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [PokeListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
