module.exports = {

    index: function (req,res){
        res.render('main/index.ejs'); 
    },

    logout: function(req,res){
        req.session.destroy();
        res.redirect('/login')
    }

}