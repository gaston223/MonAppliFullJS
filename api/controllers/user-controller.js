const User = require(__basedir+'/model/user').User;
const bcrypt = require('bcrypt');
/**
 * Enregistre l'utilisateur en BDD
 * Le mot de passe est hashé et crypté
 */


module.exports.register=(req, res, next)=>{
    //Recuperation de l'utilisateur
    const userReceived = req.body

    // Hasher le mot de passe
    if(userReceived.plainPassword){
    bcrypt.hash(userReceived.plainPassword, 16, (err, hash) => {
        if(err) { next(err);}
        else {
        userReceived.password = hash;
        userReceived.plainPassword = '';
        User.create(
            userReceived,
            (err, user)=>{
                if(err){ next(err);}
                else{
                    res.json({result: true});
                }
            }
        );
        }
    });
    }else{
        res.json({ result:false});
    }
    //Ajout de l'utilisateur
}