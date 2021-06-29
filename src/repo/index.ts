import { Booking, BookingRepo } from './booking';
import { Facility, FacilityRepo, FacilityType } from './facility';
import { UserSession, UserSessionRepo } from './session';
import { User, UserRepo } from './user';

const userRepo = new UserRepo();
const user  = new User('john', 'john@gmail.com', 'password');

userRepo.setData([
  user,
  new User('john', 'john@gmail.com', 'password'),
  new User('john', 'john@gmail.com', 'password'),
  new User('john', 'john@gmail.com', 'password'),
  new User('john', 'john@gmail.com', 'password'),
  new User('john', 'john@gmail.com', 'password'),
  new User('john', 'john@gmail.com', 'password'),
]);

const userSessionRepo = new UserSessionRepo();
userSessionRepo.setData([
  UserSession.create('token', user),
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