import { Router } from 'express';
import * as customerController from '../controllers/customer.controller';

const router = Router();

router.post('/', customerController.postcustomers);
router.get('/', customerController.getAllcustomer);
router.get('/:id', customerController.getOnecustomer);
router.delete('/:id', customerController.deleteOnecustomer);
router.put('/:id', customerController.putcustomer);


export default router;