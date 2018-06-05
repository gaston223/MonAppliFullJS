// les imports
const express =require('express');
const router =express.Router();
const productController=require(__basedir + '/controllers/product-controller');



/**
 * Route : liste des produits
 */
router.route('/')
//liste de produits
.get(productController.list)
//Ajout d'un produit
.post(productController.add)
;
module.exports =router;