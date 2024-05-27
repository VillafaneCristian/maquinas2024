const {validationResult} = require ('express-validator');

const loginMiddleware = function (req,res,next){
    const errors = validationResult (req);
    if (!errors.isEmpty()){
        req.session.errors = errors.mapped();
        req.session.oldData = req.body;
        res.redirect('/login');
    }else{
        next();
    }
};

module.exports = loginMiddleware; 

