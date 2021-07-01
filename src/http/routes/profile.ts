import { Router } from "express";
import { createAuthenticationGuard, createAuthorizationGuard } from '@src/http/middlewares/authzn';
import { userSessionRepo } from '@src/repo';
import * as handler from "@src/http/handlers/profile.handler";

const router = Router();

router.get(
  '/',
  createAuthenticationGuard(userSessionRepo),
  handler.getMyProfile
);

export default router;