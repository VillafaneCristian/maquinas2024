module.exports = (sequelize, DataTypes) => {

    let alias = 'operadores'; 

    let cols = {
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        contraseña: {
            type: DataTypes.STRING
        },
        avatar:{
            type: DataTypes.STRING
        }
    };

    let config = {
        tablename: 'operadores',
        timestamps: false
    };


const operadores = sequelize.define(alias, cols, config); 
return operadores; 

}