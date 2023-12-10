import { Router } from 'express';
import {
  addInspection,
  getEquipmentInspections,
  updateInspection,
  deleteInspection,
} from '@controllers';

const inspectionRouter = Router();

inspectionRouter.post('/', addInspection);
inspectionRouter.get('/:id', getEquipmentInspections);
inspectionRouter.put('/:id', updateInspection);
inspectionRouter.delete('/:id', deleteInspection);

export default inspectionRouter;
