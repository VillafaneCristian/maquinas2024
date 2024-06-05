module.exports = function (req, res, next) {
    if (req.session.operadorLogueado){
        res.locals.operadorLogueado = req.session.operadorLogueado; 
    }
    next()
}