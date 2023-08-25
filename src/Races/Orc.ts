import Race from './Race';

export default class Orc extends Race {
  private lifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 74,
  ) {
    super(name, dexterity);
    this.lifePoints = maxLifePoints;
    Orc._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }
}