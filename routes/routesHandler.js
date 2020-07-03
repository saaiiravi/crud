var user = require ('../controller/controller');
module.exports = function(router) {
    router.post('/register', user.register);
    //router.post('/login',user.login);
    //router.post('/update',user.update);
    //router.post('/delete',user.delete);
}