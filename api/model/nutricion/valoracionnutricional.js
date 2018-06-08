module.exports = function(sequelize, DataTypes){
    let ValoracionNutricional = sequelize.define("ValoracionNutricional", {
      idValoracionNutricional: { type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false},
      DescripcionGeneral: { type: DataTypes.STRING(1000), allowNull: false},
      Hallazgos: { type: DataTypes.STRING(2000), allowNull: true},
      PesoActual: { type: DataTypes.DOUBLE, allowNull: true},
      PesoIdeal: { type: DataTypes.DOUBLE, allowNull: true},
      TallaReferida: { type: DataTypes.DOUBLE, allowNull: true},
      CircunferenciaCarpo: { type: DataTypes.DOUBLE, allowNull: true},
      EstructuraCorporal: { type: DataTypes.DOUBLE, allowNull: true},
      CircunferenciaPantorrila: { type: DataTypes.DOUBLE, allowNull: true},
      IMC: { type: DataTypes.DOUBLE, allowNull: true},
      Diagnostico: { type: DataTypes.STRING(1000), allowNull: false},
      Analisis: { type: DataTypes.STRING(2000), allowNull: true},
      PlandeCuidados: { type: DataTypes.STRING(2000), allowNull: true},
      Fecha: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.Now},
      id_usu: { type: DataTypes.INTEGER, allowNull: false},
      iden_pac: { type: DataTypes.STRING, allowNull: true}
    });
  
    return ValoracionNutricional;
  };