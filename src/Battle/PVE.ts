import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  private _characterFigther: Fighter;
  private _monsterFigther: SimpleFighter[];

  constructor(characterFigther: Fighter, monsterFigther: SimpleFighter[]) {
    super(characterFigther);
    this._characterFigther = characterFigther;
    this._monsterFigther = monsterFigther;
  }

  fight(): number {
    this._monsterFigther.forEach((monster) => {
      this._characterFigther.attack(monster);
      monster.attack(this._characterFigther);
    });

    if (this._characterFigther.lifePoints <= 0
      || this._monsterFigther.every((monster) => monster.lifePoints <= 0)) {
      return super.fight();
    }

    return this.fight();
  }
}