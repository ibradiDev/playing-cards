import {MonsterType} from '../utils/monster.utils';

export class Monster {
  name: string = "My Monster";
  image: string = "img/pik.webp";
  type: string = MonsterType.ELECTRIC;
  hp: number = 40;
  figCaption: string = "Nº001 Monster";
  attackName: string = "Geo Impact";
  attackStrength: number = 60;
  attackDescription: string = "Te zzril et excepteur iusto, praesent tincidunt elitr nam lorem voluptate elit elit.";
}
