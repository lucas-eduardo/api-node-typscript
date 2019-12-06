import { Router } from 'express';

import userController from '../controllers/user.controller';

const router: Router = Router();

router.route('/users')
    .get(userController.getAllUsers)
    .post(userController.createUser);

router.route('/users/user/:idUser')
    .get(userController.getIdUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

export default router;