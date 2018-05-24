module.exports = function(sequelize, DataTypes){
    var eps = sequelize.define("eps", {
      ide_eps: { type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false},
      nom_eps: { type: DataTypes.STRING(50), allowNull: false}
    });
  
    return eps;
  };