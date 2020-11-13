import * as express from 'express';
import chirpRouter from './chirps'

const router = express.Router();

router.use ('/chirps', chirpRouter);

export default router;