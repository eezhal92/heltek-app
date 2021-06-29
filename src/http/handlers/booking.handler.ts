import { bookingRepo } from "@src/repo";
import { Request, Response } from "express";

export function getBookings (req: Request, res: Response) {
  let page = Number(req.query.page);
  if (isNaN(page)) page = 1;
  let limit = Number(req.query.limit);
  if (isNaN(limit)) limit = 10;
  const data = bookingRepo.find(page, limit);
  res.json(data);
}