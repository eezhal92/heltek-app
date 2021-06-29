import { Router } from "express";
import { UserManagementPermission } from '@src/lib/permission';
import { createAuthenticationGuard, createAuthorizationGuard } from '@src/http/middlewares/authzn';
import { userSessionRepo } from '@src/repo';
import * as handler from "@src/http/handlers/user.handler";

const router = Router();

router.get(
  '/',
  createAuthenticationGuard(userSessionRepo),
  createAuthorizationGuard(UserManagementPermission.ViewList),
  handler.getUsers
);

export default router;