module.exports = (sequelize, DataTypes) => {

    let alias = 'usuarios';

    let cols = {
        nombre: {
            type: DataTypes.STRING
        },
        apellido:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        dependencia_id:{
            type: DataTypes.STRING
        }
    };

    let config = {
        tableName: 'usuarios',
        timestamps: false
    };

    const usuarios = sequelize.define(alias, cols, config);

    return usuarios;

}