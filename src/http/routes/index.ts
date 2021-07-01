import { Router } from "express";
import user from './user';
import facility from './facility';
import booking from './booking';
import auth from './auth';
import profile from './profile';

const router = Router();

router.use('/users', user);
router.use('/facilities', facility);
router.use('/bookings', booking);
router.use('/auth', auth);
router.use('/profile', profile);

export default router;