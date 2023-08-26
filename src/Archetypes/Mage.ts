import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  energyType: EnergyType;
  static mageCount = 0;

  constructor(
    name: string,
    special = 0,
    cost = 0,
  ) {
    super(name, special, cost);
    this.energyType = 'mana';
    Mage.mageCount += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage.mageCount;
  }
}