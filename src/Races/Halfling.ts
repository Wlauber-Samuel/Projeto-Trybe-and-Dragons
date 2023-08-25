import Race from './Race';

export default class Halfling extends Race {
  private lifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 60,
  ) {
    super(name, dexterity);
    this.lifePoints = maxLifePoints;
    Halfling._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
}