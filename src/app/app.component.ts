import {Component, computed, inject, model, signal} from '@angular/core';
import {PlayingCardComponent} from './components/playing-card/playing-card.component';
import {Monster} from './models/monster.model';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {MonsterService} from './services/monster/monster.service';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent, SearchBarComponent, RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'playing-cards';

}
