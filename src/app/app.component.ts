import {Component, computed, inject, model, signal} from '@angular/core';
import {PlayingCardComponent} from './components/playing-card/playing-card.component';
import {Monster} from './models/monster.model';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {MonsterService} from './services/monster/monster.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent, SearchBarComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'playing-cards';
  monsterService = inject(MonsterService);

  monsters = signal<Monster[]>([]);
  searchText = model("");

  filteredMonsters = computed(() => {
    return this.monsters().filter(monster => monster.name.includes(this.searchText()));
  })

  selectedMonsterIndex = signal(1);
  selectedMonster = computed(() => {
    return this.monsters()[this.selectedMonsterIndex()];
  });

  constructor() {
    this.monsters.set(this.monsterService.getAll());
  }

  addGenericMonster(): void {
    const genericMonster = new Monster();
    this.monsterService.add(genericMonster);
    this.monsters.set(this.monsterService.getAll());
  }
}
