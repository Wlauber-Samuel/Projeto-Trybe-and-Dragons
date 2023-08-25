import Race from './Race';

export default class Elf extends Race {
  private lifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 99,
  ) {
    super(name, dexterity);
    this.lifePoints = maxLifePoints;
    Elf._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }
}