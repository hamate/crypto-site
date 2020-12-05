import express from 'express';
import { registrationController, loginController } from '../controllers';

const cors = require('cors');

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/register', registrationController.post);
router.post('/login', loginController.post);

export default router;
