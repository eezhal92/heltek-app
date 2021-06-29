import { userRepo, userSessionRepo } from "@src/repo";
import { UserSession } from "@src/repo/session";
import { Request, Response } from "express";

interface LoginPayload {
  email: string;
  password: string;
}

export function login (req: Request, res: Response) {
  const data = req.body as LoginPayload;
  const user = userRepo.findByEmailAndPassword(data.email, data.password);
  if (!user) {
    res.status(404).json({
      message: 'Cannot find account associated with provided credentials',
    });
    return;
  }

  const session = UserSession.generateFor(user);
  userSessionRepo.add(session);
  res.json({
    token: session.token,
  });
}