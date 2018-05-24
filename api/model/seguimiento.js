module.exports = function(sequelize, DataTypes){
    var seguimiento = sequelize.define('SeguimientoMedicamentos', {
        id_MedxSeg: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        dosis: {type: DataTypes.STRING(160), allowNull: false},
        hora: { type: DataTypes.STRING(6), allowNull: false},
        id_prod: { type: DataTypes.STRING(50), allowNull: false},
        id_usu: {type: DataTypes.INTEGER(11), allowNull: true},
        createdAt: {type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.Now},
        Id_ValSegEnf: {type: DataTypes.INTEGER(11), allowNull: true}
    });

    return seguimiento;
}