import { userRepo } from "@src/repo";
import { User } from "@src/repo/user";
import { Request, Response } from "express";

export function getMyProfile(req: Request, res: Response) {
  const loggerUser = req.app.locals.user as User;

  const user = userRepo.getById(loggerUser.id);

  res.json({ user });
}