// les imports
const express =require('express');
const router =express.Router();
const ProductFile=require(__basedir +'/model/product.js');
const Product = ProductFile.Product;

/**
 * Route : liste des produits
 */

router.get('/',(req, res, next)=>{
    //Récupération des produits
    Product.find(
        (err, products)=>{
            if(err){next(err);}
            else{
                res.json(products);
            }
        }
    )
})
module.exports =router;