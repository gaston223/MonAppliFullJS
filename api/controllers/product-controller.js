const ProductFile=require(__basedir +'/model/product.js');
const Product = ProductFile.Product;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
/**
 * Récupere la liste des produits
 */

module.exports.list= (req, res, next)=>{
    //Récupération des produits
        Product.find(   
            (err, products)=>{
                if(err){next(err);}
                else{
                    console.log('Success')
                    res.json(products);
                    }
            }
        );
    };

/**
 * Ajout d'un produit dans la bdd
 */
module.exports.add= (req, res, next)=>{
    const productReceived = req.body;
    
    //Ajout d'un produit dans la bdd
    Product.create(
        productReceived,
        (err, product)=>{
            if(err){next(err);}
            else{
                res.json(product);
            }
        }
    );

};

/*
Récupération d'un produit par rapport à son id
*/

module.exports.show = (req, res, next) => {
    //Récupération de l'id
    const id =req.params.id;
    if(ObjectId.isValid(id)){
    //Récupération du produit
    Product.findOne(
        {'_id' : id},
        (err, product)=>{
            if(err){next(err);}
            else{
                res.json(product);
            }
        }
      
    );    
    }
    else{res.json(null);}
}

module.exports.update= (req, res, next)=>{
    //Recuperation du produit
    const productToUpdate = req.body;

    //Si l'id du produit envoyé est valide : on modifie
    if(productToUpdate._id && ObjectId.isValid(productToUpdate._id) ){

    //Modification du produit
    Product.update(
        //Les conditions que doivent les enregistrements pour etre modifiés
        {
            '_id' : productToUpdate._id
        },
        //les modifications a effectuer
        productToUpdate,


        //Fonction de Rappel (callback= à executer lorsque les modifications ont été faites)
        (err, nbLines)=>{
            if(err){ next(err);}
            else{
                res.json({ result:true});
            }
        }
        );
        }else{
        res.json({ result:false});
    }
}
/**
 * Suppression de produit
 */
module.exports.delete = (req, res, next)=>{
    //Recupération de l'id
    const id = req.params.id;

    //Suppression du produit
    if(ObjectId.isValid(id)){
        Product.deleteOne(
            { '_id' : id},
            (err)=>{
                if(err){ next(err);}
                else{
                    res.json({ result:true});
                }
            }
        );
    }
    else{
        res.json({ result:false});
    }
}