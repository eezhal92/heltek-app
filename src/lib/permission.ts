export enum FacilityManagementPermission {
  ViewList = 'facility_management.view_list',
  ViewDetail = 'facility_management.view_detail',
  Update = 'facility_management.update',
  Create = 'facility_management.create',
  Delete = 'facility_management.delete',
}

export enum BookingManagmentPermission {
  ViewList = 'booking_management.view_list',
  ViewDetail = 'booking_management.view_detail',
  Update = 'booking_management.update',
  Create = 'booking_management.create',
  Delete = 'booking_management.delete',
}
  
export enum UserManagementPermission {
  ViewList = 'user_management.view_list',
  ViewDetail = 'user_management.view_detail',
  Update = 'user_management.update',
  Create = 'user_management.create',
  Delete = 'user_management.delete',
}
  
export type ManagementPermissions = 
  | UserManagementPermission 
  | BookingManagmentPermission
  | FacilityManagementPermission;