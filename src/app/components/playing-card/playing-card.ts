import { Component } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.css'
})
export class PlayingCard {

  name: string="My monster";
  hp: number=40;
  figureCation: string="N°001 Monster";
  attackName: string="Geo Impact";
  attackStrength: number=60;
  attackDescription: string=" This is long description of a monster attack. Probably something todo with electriccity...";
}
