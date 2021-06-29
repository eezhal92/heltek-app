import { BaseRepo } from "./base";
import { Facility } from "./facility";
import { User } from "./user";

export class Booking {
  public id: number;
  public user: User;
  public schedule: Date;
  public facility: Facility;

  public constructor(id: number, user: User, facility: Facility, schedule: Date) {
    this.id = id;
    this.user = user;
    this.facility = facility;
    this.schedule = schedule;
  }

  public static create(user: User, facility: Facility, schedule: Date) {
    const id = Math.random();
    return new Booking(id, user, facility, schedule);
  }
}

export class BookingRepo extends BaseRepo<Booking> {

}