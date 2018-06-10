const express =require('express');
const router =express.Router();
const userController = require(__basedir +'/controllers/user-controller');


//Ajout d'un utilisateur
router.post('/', userController.register);
router.get('/',);
router.post('/',)

//On export le routeur pour pouvoir l'utiliser dans l'application
module.exports = router;