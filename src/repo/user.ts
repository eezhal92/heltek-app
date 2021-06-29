import { BookingManagmentPermission, FacilityManagementPermission, ManagementPermissions, UserManagementPermission } from "../lib/permission";
import { BaseRepo } from "./base";

export class Role {
  public name: string;
  public permissions: string[] = [];

  public constructor(name: string, permissions: string[]) {
    this.name = name;
    this.permissions = permissions;
  }
}

const admin = new Role('Admin', [
  FacilityManagementPermission.ViewList,
  FacilityManagementPermission.ViewDetail,
  FacilityManagementPermission.Create,
  FacilityManagementPermission.Update,
  FacilityManagementPermission.Delete,
  
  BookingManagmentPermission.ViewList,
  BookingManagmentPermission.ViewDetail,
  BookingManagmentPermission.Create,
  BookingManagmentPermission.Update,
  BookingManagmentPermission.Delete,
  
  UserManagementPermission.ViewList,
  UserManagementPermission.ViewDetail,
  UserManagementPermission.Create,
  UserManagementPermission.Update,
  UserManagementPermission.Delete,
]);

export class User {
  public id: number = 0;
  public name: string = '';
  public email: string = '';
  private password: string = '';
  public roles: Role[] = [admin];

  public constructor(name: string, email: string, password?: string) {
    this.id = Math.random();
    this.name = name;
    this.email = email;
    if (password) this.password = password;
  }

  public get permissions() : string[] {
    const permissions = this.roles.reduce((acc: string[], role) => acc.concat(role.permissions), [])
    
    return Array.from(new Set(permissions));
  }

  public getPassword() : string {
    return this.password;
  }

  public setPassword(password: string) : void {
    this.password = password;
  }

  public hasManagementPermission(permission: ManagementPermissions) {
    return this.permissions.includes(permission);
  }
}

export class UserRepo extends BaseRepo<User> {}
