module.exports = function(sequelize, DataTypes){
    var paciente = sequelize.define("paciente", {
      iden_Pac: { type: DataTypes.STRING(50), primaryKey: true, autoIncrement: true, allowNull: false},
      nom_Pac: { type: DataTypes.STRING(50), allowNull: false}, 
      ape_Pac: { type: DataTypes.STRING(50)},
      dis_pas: { type: DataTypes.INTEGER(11)},
      cel_pac:  { type: DataTypes.STRING(50)},
      direc_pas:  { type: DataTypes.STRING(100)},
      sex_pas: { type: DataTypes.INTEGER(11)},
      eps_pac: { type: DataTypes.INTEGER(11)},
      ciudad: { type: DataTypes.STRING(150)},
      fnaci_pas: { type: DataTypes.STRING, allowNull: true}
    });
  
    return paciente;
  };