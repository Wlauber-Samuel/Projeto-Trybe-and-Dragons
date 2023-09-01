import Battle from './Battle';
import Fighter from '../Fighter/Fighter';

export default class PVP extends Battle {
  private _player: Fighter;
  private _enemy: Fighter;

  constructor(player: Fighter, enemy: Fighter) {
    super(player);
    this._player = player;
    this._enemy = enemy;
  }

  fight(): number {
    this._player.attack(this._enemy);
    this._enemy.attack(this._player);

    if (this._player.lifePoints <= 0 || this._enemy.lifePoints <= 0) {
      return super.fight();
    }
    return this.fight();
  }
}