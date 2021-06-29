import { BaseRepo } from "./base";

export enum FacilityType {
  Hospital = 'hospital',
  Clinic = 'clinic',
}

export class Facility {
  public id: number = 0;
  public name: string;
  public address: string;
  public type: FacilityType;

  constructor(id: number, name: string, address: string, type: FacilityType) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.type = type;
  }

  public static create(name: string, address: string, type: FacilityType) {
    const id = Math.random();

    return new Facility(id, name, address, type);
  }
}

export class FacilityRepo extends BaseRepo<Facility> {
  public update(id: number, data: { name: string, address: string, type: FacilityType }) {
    const item = this.getById(id);

    item.name = data.name;
    item.address = data.address;
    item.type = data.type;

    return item;
  }
}