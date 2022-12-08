import { Router } from 'express';
import * as productsController from '../controllers/products.controller';

const router = Router();

router.post('/', productsController.postProducts);
router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getOneProducts);
router.delete('/:id', productsController.deleteOneProducts);
router.put('/:id', productsController.putProducts);


export default router;