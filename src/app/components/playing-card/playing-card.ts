import { Component, Input } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.html',
  styleUrls: ['./playing-card.css'], // <-- c'était "styleUrl", corrigé en "styleUrls"
})
export class PlayingCard {
  @Input() monster: Monster = new Monster();
}
