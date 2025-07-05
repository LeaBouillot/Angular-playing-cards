import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCard } from './components/playing-card/playing-card';
import { Monster } from './models/monster.model';
import { SearchBar } from "./components/search-bar/search-bar";

@Component({
  selector: 'app-root',
  imports: [PlayingCard, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  monster1!: Monster;
  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = 'Pik';
    this.monster1.hp = 60;
    this.monster1.figureCaption = 'N°002 Pik';
  }

  // protected title = 'playing-card';
}
