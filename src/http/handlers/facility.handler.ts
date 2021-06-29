import { facilityRepo } from "@src/repo";
import { EntityNotFoundError } from "@src/repo/base";
import * as status from "http-status";
import { Facility, FacilityType } from "@src/repo/facility";
import { NextFunction, Request, Response } from "express";
import { InternalServerError, NotFoundError } from "@src/lib/http-error";

interface FacilityData {
  name: string;
  address: string;
  type: FacilityType;
}

export function getFacilities(req: Request, res: Response) {
  let page = Number(req.query.page);
  if (isNaN(page)) page = 1;
  let limit = Number(req.query.limit);
  if (isNaN(limit)) limit = 10;
  const data = facilityRepo.find(page, limit);
  res.json(data);
}

export function createFacility(req: Request, res: Response) {
  const data = req.body as FacilityData;
  // todo: implement input validation on route

  const facility = Facility.create(
    data.name,
    data.address,
    data.type,
  );

  facilityRepo.add(facility);
  res.status(status.CREATED).json({ facility });
}

export function removeFacility(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id);

  try {
    facilityRepo.remove(id);
  } catch (err) {
    if (err instanceof EntityNotFoundError) {
      next(new NotFoundError());
      return; 
    }

    next (new InternalServerError());
    return;
  }
  res.status(status.OK).json({ message: 'Facility has been removed' });
}

export function getFacilityById(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id);
  let facility: Facility | null = null;
  try {
    facility = facilityRepo.getById(id);
  } catch (err) {
    if (err instanceof EntityNotFoundError) {
      next(new NotFoundError());
      return; 
    }

    next (new InternalServerError());
    return;
  }
  res.status(status.OK).json({ facility });
}

export function updateFacility(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id);
  const data = req.body as FacilityData;
  let facility: Facility | null = null;
  try {
    facility = facilityRepo.update(id, data);
  } catch (err) {
    if (err instanceof EntityNotFoundError) {
      next(new NotFoundError());
      return; 
    }

    next (new InternalServerError());
    return;
  }
  res.status(status.OK).json({ facility });
}