import { BaseRepo } from "./base";
import { User } from "./user";

export class UserSession {
  id: number;
  token: string;
  user: User;

  public constructor (token: string, user: User) {
    this.id = Math.random();
    this.token = token;
    this.user = user;
  }

  public static create(token: string, user: User) {
    return new UserSession(token, user);
  }
}

export class UserSessionRepo extends BaseRepo<UserSession> {
  public findByToken(token: string) {
    return this.data.find(session => session.token === token) || null;
  }
}