export enum MonsterType {
  PLANT = "plant",
  ELECTRIC = "electric",
  FIRE = "fire",
  WATER = "water",
}

export interface IMonsterProperties {
  imageUrl: string;
  color: string;
}

export const MonsterTypeProperties: { [key: string]: IMonsterProperties } = {
  [MonsterType.PLANT]: {
    imageUrl: "img/plant.jpg", color: "rgba(135, 255, 124)",
  },
  [MonsterType.WATER]: {
    imageUrl: "img/water.jpg", color: "rgba(118, 135, 114)",
  },
  [MonsterType.ELECTRIC]: {
    imageUrl: "img/electric.jpg", color: "rgba(255, 255, 104)",
  },
  [MonsterType.FIRE]: {
    imageUrl: "img/fire.jpg", color: "rgba(255, 104, 104)",
  },
}
