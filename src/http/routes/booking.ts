import { Router } from "express";
import { BookingManagmentPermission, UserManagementPermission } from '@src/lib/permission';
import { createAuthenticationGuard, createAuthorizationGuard } from '@src/http/middlewares/authzn';
import { userSessionRepo } from '@src/repo';
import * as handler from "@src/http/handlers/booking.handler";

const router = Router();

router.get(
  '/',
  createAuthenticationGuard(userSessionRepo),
  createAuthorizationGuard(BookingManagmentPermission.ViewList),
  handler.getBookings
);

export default router;