import { Router } from "express";
import * as handler from "@src/http/handlers/auth.handler";
import { createInputGuard } from "../middlewares/input";
import { createAuthenticationGuard } from "../middlewares/authzn";
import { userSessionRepo } from "@src/repo";

const router = Router();

router.post(
  '/login',
  createInputGuard({
    email: 'required',
    password: 'required',
  }),
  handler.login
);
router.post(
  '/logout',
  createAuthenticationGuard(userSessionRepo),
  handler.logout
);

export default router;