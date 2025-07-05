import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCard } from './components/playing-card/playing-card';

@Component({
  selector: 'app-root',
  imports: [PlayingCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'test-app';
}
