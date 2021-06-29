import { UnprocessableEntityError } from "@src/lib/http-error";
import { NextFunction, Request, Response } from "express";
import Validator from 'validatorjs';

export function createInputGuard(rules: Record<string, string>) {
  return function inputGuard(req: Request, res: Response, next: NextFunction) {
    const data = req.body;
    const validation = new Validator(data, rules);

    if (validation.fails()) {
      const err = new UnprocessableEntityError(validation.errors);
      return next(err);
    }

    return next();
  }
}