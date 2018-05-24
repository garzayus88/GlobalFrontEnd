// initialize database connection
module.exports = function(sequelize, DataTypes){
  var medicamento = sequelize.define('medicamentos', {
    id_prod: { type: DataTypes.STRING, primaryKey: true, autoIncrement: true, allowNull: false},
    nom_prod: { type: DataTypes.STRING, allowNull: false}, 
    tip_prod: { type: DataTypes.STRING(100)},
    unid_medi: { type: DataTypes.STRING(400)},
    cum: { type: DataTypes.STRING(100), allowNull: true}, 
    concentra : { type: DataTypes.STRING(400), allowNull: true}, 
    form_farma: { type: DataTypes.STRING(400), allowNull: true},
    grup_farma: { type: DataTypes.STRING(400), allowNull: true},
    indicacion: { type: DataTypes.STRING(4000), allowNull: true},
    precau:  { type: DataTypes.STRING(400), allowNull: true},
    pos: { type: DataTypes.STRING(100), allowNull: true}
  });

  return medicamento;
};

