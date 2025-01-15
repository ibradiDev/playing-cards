import {MonsterType} from '../utils/monster.utils';

export class Monster {
  id: number = -1;
  name: string = "My Monster";
  image: string = "img/pik.webp";
  type: string = MonsterType.ELECTRIC;
  hp: number = 40;
  figCaption: string = "Nº001 Monster";
  attackName: string = "Geo Impact";
  attackStrength: number = 60;
  attackDescription: string = "Te zzril et excepteur iusto, praesent tincidunt elitr nam lorem voluptate elit elit.";

  // Create a copy of the Monster object with all the params of the current one
  copy(): Monster {
    return Object.assign(new Monster(), this);
  }
}
