const ProductFile=require(__basedir +'/model/product.js');
const Product = ProductFile.Product;
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