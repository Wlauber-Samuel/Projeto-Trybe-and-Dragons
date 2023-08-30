import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  name: string;

  constructor(name: string) {
    this.name = name;
    this._dexterity = Math.floor(Math.random() * 10) + 1;
    this._race = new Elf(this.name, this._dexterity);
    this._archetype = new Mage(this.name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Math.floor(Math.random() * 10) + 1;
    this._defense = Math.floor(Math.random() * 10) + 1;
    this._energy = {
      type_: this._archetype.energyType,
      amount: Math.floor(Math.random() * 10) + 1,
    };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { return { ...this._energy }; }

  receiveDamage(attackPoints: number): number {
    const damageReceived = Math.max(attackPoints - this._defense, 0);
    this._lifePoints -= damageReceived;
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    const incrementoPoint = Math.floor(Math.random() * 10) + 1;
    const newMaxLifePoints = Math.min(
      this._maxLifePoints + incrementoPoint,
      this._race.maxLifePoints,
    );

    this._maxLifePoints = newMaxLifePoints;
    this._strength += incrementoPoint;
    this._dexterity += incrementoPoint;
    this._defense += incrementoPoint;
    this._lifePoints = this._maxLifePoints;

    if (this._energy) {
      this._energy.amount = 10;
    }
  }

  special(enemy: Fighter): void {
    if (this._energy.amount > 0) {
      this._energy.amount -= 1;
      enemy.receiveDamage(this.strength * 2);
    }
  }
}