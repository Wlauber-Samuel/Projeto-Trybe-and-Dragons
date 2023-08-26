import { EnergyType } from '../Energy';

export default abstract class Archetype {
  constructor(
    protected readonly _name: string,
    protected readonly _special: number = 0,
    protected readonly _cost: number = 0,
  ) {}

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}