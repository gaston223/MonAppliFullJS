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
// Modification d'un produit
.put(productController.update)


//Détail d'un produit
router.get('/:id', productController.show)
module.exports =router;