import { BookingManagmentPermission, FacilityManagementPermission, UserManagementPermission } from '@src/lib/permission';
import { Booking, BookingRepo } from './booking';
import { Facility, FacilityRepo, FacilityType } from './facility';
import { UserSession, UserSessionRepo } from './session';
import { Role, User, UserRepo } from './user';

const userRepo = new UserRepo();
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

const viewer = new Role('Viewer', [
  FacilityManagementPermission.ViewList,
  FacilityManagementPermission.ViewDetail,
  
  BookingManagmentPermission.ViewList,
  BookingManagmentPermission.ViewDetail,
]);

const user  = new User('john', 'john@gmail.com', 'password', [admin]);

userRepo.setData([
  user,
  new User('mark', 'mark@gmail.com', 'password', [viewer]),
  new User('greg', 'greg@gmail.com', 'password'),
  new User('jane', 'jane@gmail.com', 'password'),
  new User('mike', 'mike@gmail.com', 'password'),
  new User('bill', 'bill@gmail.com', 'password'),
  new User('fred', 'fred@gmail.com', 'password'),
]);

const userSessionRepo = new UserSessionRepo();
userSessionRepo.setData([
  UserSession.create('valid_example_token', user),
])

const facilityRepo = new FacilityRepo();
const facility = new Facility(11, 'Klinik A', 'Jl. Kenangan', FacilityType.Clinic);

facilityRepo.setData([
  facility,
  new Facility(12, 'Klinik B', 'Jl. Kenangan', FacilityType.Clinic),
  new Facility(13, 'Klinik C', 'Jl. Kenangan', FacilityType.Clinic),
  new Facility(14, 'Klinik D', 'Jl. Kenangan', FacilityType.Clinic),
  new Facility(15, 'Klinik E', 'Jl. Kenangan', FacilityType.Clinic),
  new Facility(16, 'Klinik F', 'Jl. Kenangan', FacilityType.Clinic),
  new Facility(17, 'Klinik G', 'Jl. Kenangan', FacilityType.Clinic),
  
  new Facility(21, 'Rumah Sakit A', 'Jl. Pulang', FacilityType.Hospital),
  new Facility(22, 'Rumah Sakit B', 'Jl. Pulang', FacilityType.Hospital),
  new Facility(23, 'Rumah Sakit C', 'Jl. Pulang', FacilityType.Hospital),
  new Facility(24, 'Rumah Sakit D', 'Jl. Pulang', FacilityType.Hospital),
  new Facility(25, 'Rumah Sakit E', 'Jl. Pulang', FacilityType.Hospital),
  new Facility(26, 'Rumah Sakit F', 'Jl. Pulang', FacilityType.Hospital),
  new Facility(27, 'Rumah Sakit G', 'Jl. Pulang', FacilityType.Hospital),
]);

const bookingRepo = new BookingRepo();
bookingRepo.setData([
  new Booking(1, user, facility, new Date()),
]);

export { userRepo, userSessionRepo, facilityRepo, bookingRepo };