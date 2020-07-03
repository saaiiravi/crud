var db = require('../db/config');
 var bcrypt = require('bcryptjs');

exports.register = async function(req,res){
    const password = req.body.password;
  const encryptedPassword = await bcrypt.hash(password, 10);
    var users = {
        "email" : req.body.email,
        "password" :encryptedPassword
    }
    db.User.create(users,function(error,results){
        if(error){
            res.json({
                "code": 400,
                "failed" : "error occurred"
            })
        }else {
            res.json({
                "code" : 200,
                "success" : "created"
            })
        }
    });
    //console.log(users.email);
   /* db.connection.query('SELECT * FROM users where email = ?',[users.email],function(error,rows){
        if(error){
            res.json({
                "code" : 400,
                "failed" : "error occurred"
            })
        }
        if(!rows.length){
            db.connection.query('Insert into users SET ?', users, function(error,results,fields){
                //console.log(results);
                if(error){
                    res.json({
                        "code" : 400,
                        "failed" : "error occurred"
                    })
                }else{
                    res.json({
                        "code" : 200,
                        "success" : "User registered successfully"
                    });
                }
            });

        }
        else {
            res.json({
                "code" : 400,
                "failed" : "Email already exists, Please login"
            });
        }
    }) */
    
}