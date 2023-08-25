import Race from './Race';

export default class Dwarf extends Race {
  private static _createdRacesInstances = 0;
  private lifePoints: number;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 80,
  ) {
    super(name, dexterity);
    this.lifePoints = maxLifePoints;
    Dwarf._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }
}