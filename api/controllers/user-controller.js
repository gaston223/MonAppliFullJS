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
    bcrypt.hash(userReceived.plainPassword, 10, (err, hash) => {
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
/**
 * Vérification du nom d'utilisateur et du mot de passe
 * @param  req 
 * @param  res 
 * @param  nest 
 */
module.exports.login = (req, res, next) => {

    // Récupération des données envoyées
    const datas = req.body;

    if(datas.username && datas.plainPassword) {
        // Recherche de l'utilisateur
        User.findOne(
            {
                'username': datas.username
            }, 
            (err, user) => {
                if(err) { next(err); }
                else{

                    if(user) {
                        // Vérification du mot de passe

                        console.log(datas.plainPassword),
                        console.log(user.password);
                        bcrypt.compare(datas.plainPassword, user.password, (err, resultat) => {
                            if(err) { next(err); }
                            else {
                                if(resultat) { 
                                    // connexion ok 
                                    res.json({result: true}); }
                                else { res.json({result: false}); }
                            }
                        })
                    } else { res.json({result: false}); }
                   
                }
            }
        )
    } else {
        res.json({result: false});
    }
};