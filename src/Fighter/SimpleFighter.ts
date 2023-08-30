export default class SimpleFighter {
  lifePoints: number;
  strength: number;
  constructor(lifePoints: number, strength: number) {
    this.lifePoints = lifePoints;
    this.strength = strength;
  }

  attack(enemy: SimpleFighter) {
    const attackPoints = this.strength - enemy.lifePoints;
    if (attackPoints > 0) {
      enemy.receiveDamage(attackPoints);
    }
  }

  receiveDamage(attackPoints: number): number {
    this.lifePoints -= attackPoints;
    return this.lifePoints;
  }
}