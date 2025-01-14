import {Component, computed, effect, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PlayingCardComponent} from './components/playing-card/playing-card.component';
import {Monster} from './models/monster.model';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {MonsterType} from './utils/monster.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'playing-cards';
  monsters!: Monster[];
  searchText: string = "";
  selectedMonsterIndex = signal(1);
  selectedMonster = computed(() => {
    return this.monsters[this.selectedMonsterIndex()];
  });

  constructor() {


    this.monsters = [];

    const monster = new Monster();
    monster.name = 'Pik';
    monster.hp = 40;
    monster.image = 'img/pik.webp';
    monster.type = MonsterType.ELECTRIC;
    monster.figCaption = "Nº002 Pik";
    this.monsters.push(monster);

    const monster2 = new Monster();
    monster2.name = 'Car';
    monster2.image = 'img/water.jpg';
    monster2.type = MonsterType.WATER;
    monster2.hp = 60;
    monster2.figCaption = "Nº003 Car"
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.name = 'Fire Storm';
    monster3.image = 'img/fire.jpg';
    monster3.type = MonsterType.FIRE;
    monster3.hp = 60;
    monster3.figCaption = "Nº004 Car"
    this.monsters.push(monster3);
  }


  toggleMonster() {
    this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % this.monsters.length);
  }
}
