import { AuthenticationError, AuthorizationError } from "@src/lib/http-error";
import { ManagementPermissions } from "@src/lib/permission";
import { UserSessionRepo } from "@src/repo/session";
import { User } from "@src/repo/user";
import { NextFunction, Request, Response } from "express";

export function createAuthorizationGuard (permission: ManagementPermissions) {
  return function authorizationGuard(req: Request, res: Response, next: NextFunction) {
    const user = req.app.locals.user as User;

    if (user.hasManagementPermission(permission)) return next();
    return next(new AuthorizationError());
  }
}

export function createAuthenticationGuard (userSessionRepo: UserSessionRepo) {
  return function authenticationGuard (req: Request, res: Response, next: NextFunction) {
    const token = req.header('x-heltek-token') || '';

    if (!token) return next(new AuthenticationError());

    const session = userSessionRepo.findByToken(token);
    if (!session) return next(new AuthenticationError());

    req.app.locals.user = session.user;

    return next();
  }
}