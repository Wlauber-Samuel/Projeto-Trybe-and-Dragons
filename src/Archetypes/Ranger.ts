import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  energyType: EnergyType;
  static rangerCount = 0;

  constructor(
    name: string,
    special = 0,
    cost = 0,
  ) {
    super(name, special, cost);
    this.energyType = 'stamina';
    Ranger.rangerCount += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger.rangerCount;
  }
}