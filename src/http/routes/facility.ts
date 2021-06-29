import { Router } from "express";
import * as handler from "@src/http/handlers/facility.handler";
import { createAuthenticationGuard, createAuthorizationGuard } from "../middlewares/authzn";
import { userSessionRepo } from "@src/repo";
import { FacilityManagementPermission } from "@src/lib/permission";
import { createInputGuard } from "../middlewares/input";
import { FacilityType } from "@src/repo/facility";

const router = Router();

router.get(
  '/',
  handler.getFacilities
);

router.post(
  '/',
  createAuthenticationGuard(userSessionRepo),
  createAuthorizationGuard(FacilityManagementPermission.Create),
  createInputGuard({
    name: 'required',
    address: 'required',
    type: `required|in:${Object.values(FacilityType)}`,
  }),
  handler.createFacility
);

router.get(
  '/:id',
  createAuthenticationGuard(userSessionRepo),
  createAuthorizationGuard(FacilityManagementPermission.ViewDetail),
  handler.getFacilityById
);

router.delete(
  '/:id',
  createAuthenticationGuard(userSessionRepo),
  createAuthorizationGuard(FacilityManagementPermission.Delete),
  handler.removeFacility
);

router.put(
  '/:id',
  createAuthenticationGuard(userSessionRepo),
  createAuthorizationGuard(FacilityManagementPermission.Update),
  handler.updateFacility
);

export default router;