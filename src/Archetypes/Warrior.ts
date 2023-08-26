import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  energyType: EnergyType;
  static warriorCount = 0;

  constructor(
    name: string,
    special = 0,
    cost = 0,
  ) {
    super(name, special, cost);
    this.energyType = 'stamina';
    Warrior.warriorCount += 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior.warriorCount;
  }
}