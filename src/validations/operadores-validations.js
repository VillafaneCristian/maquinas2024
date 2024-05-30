const {body} = require ('express-validator');

module.exports = [
    body('id').notEmpty().withMessage('El campo cuil no puede estar vacío'),
    body('nombre').notEmpty().withMessage('El campo nombre no puede estar vacío'),
    body('apellido').notEmpty().withMessage('El campo apellido no puede estar vacio'),
    body('email')
        .notEmpty().withMessage('El campo email no puede estar vacío').bail()
        .isEmail().withMessage('El campo debe tener un formato de Email válido'),
    body('contraseña').notEmpty().withMessage('El campo contraseña no puede estar vacío')
];