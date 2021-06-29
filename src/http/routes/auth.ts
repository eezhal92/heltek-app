import { Router } from "express";
import * as handler from "@src/http/handlers/auth.handler";
import { createInputGuard } from "../middlewares/input";

const router = Router();

router.post(
  '/',
  createInputGuard({
    email: 'required',
    password: 'required',
  }),
  handler.login
);

export default router;