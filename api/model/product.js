// les imports
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Création du schéma
const productSchema = new Schema ({
    name : {
        type :String,
        required:'Le nom du produit doit etre renseigné',
        unique : true
    },
    introduction: {
        type :String,
        required:'Introduction obligatoire'

    },
    price : Number,
    nbViews : Number,
    isPublished: Boolean,
    createdAt :{ 
        type:Date,
        required:'Date de création obligatoire'
    },
    updatedAt: Date,
    publicateur:{ 
        type:String,
        required:'Publicateur obligatoire'
    }
});

//Création du modèle
const Product = mongoose.model('Product', productSchema);

module.exports.Product = Product;