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

module.exports.login=(req, res, next)=>{
    //Verif du nom d'utilisateur et du mot de passe
    const datas = req.body;
    if (datas.username){
        User.find(
            {
                'username': datas.username
            },
            (err, user)=>{
                if(err){next(err);}
                else{
                    //Verification du mot de passe
                    bcrypt.compare(datas.plainPassword, userpassword,(err,res)=>{
                        if(err) {res.json({result: false});}
                        else{
                        if (res){{res.json({result:false});}}
                        }
                    })
                }
            }
        )
    }
   
}