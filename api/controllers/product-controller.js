const Product=require(__basedir +'/model/product.js').Product;
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
    //Ajout d'un produit dans la bdd
    Product.create(
        {
            name : 'Broly',
            introduction:'Le mechant le plus redoutable de tous les temps',
            price: 999.99,
            createdAt: new Date(),
            publicateur:'Gaston'
        },
        (err, product)=>{
            if(err){next(err);}
            else{
                res.json(product);
            }
        }
    );


};