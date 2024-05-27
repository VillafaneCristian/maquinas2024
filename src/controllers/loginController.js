module.exports = {

    login: function (req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        res.render('login/login.ejs',{
            errors: errors ? errors : null,
            oldData: oldData ? oldData : null
        }); 
    },

    procesarLogin: function(req,res){
        req.session.operadorLogueado = req.body;
        res.send(req.session.operadorLogueado);
    }

}