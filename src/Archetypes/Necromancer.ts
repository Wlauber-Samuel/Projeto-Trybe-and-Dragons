import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  energyType: EnergyType;
  static necromancerCount = 0;

  constructor(
    name: string,
    special = 0,
    cost = 0,
  ) {
    super(name, special, cost);
    this.energyType = 'mana';
    Necromancer.necromancerCount += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer.necromancerCount;
  }
}