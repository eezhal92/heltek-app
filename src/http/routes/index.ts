import { Router } from "express";
import user from './user';
import facility from './facility';
import booking from './booking';

const router = Router();

router.use('/users', user);
router.use('/facilities', facility);
router.use('/bookings', booking);

export default router;