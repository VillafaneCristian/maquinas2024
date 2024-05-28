const {body} = require ('express-validator');

module.exports = [
    body('id').notEmpty().withMessage('El campo cuil no puede estar vacio'),
    body('contraseña').notEmpty().withMessage('El campo contraseña mo puede estar vacio')
]