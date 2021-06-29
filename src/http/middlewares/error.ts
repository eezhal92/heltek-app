import { HTTPError, UnprocessableEntityError } from "@src/lib/http-error";
import { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) : void {
  if (!err) {
    next();
    return;
  }
  
  if (err instanceof HTTPError) {
    if (err instanceof UnprocessableEntityError) {
      res.status(err.code).json(err.messages);
      return;
    }
    res.status(err.code).send(err.message);
    return;
  }
  
  console.log(err);
  res.status(500).send(err.stack);
}