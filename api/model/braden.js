// initialize database connection
module.exports = function(sequelize, DataTypes){
    var valoracion = sequelize.define("valoracion_seg_enfermeria", {
      Id_ValSegEnf: { type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true, allowNull: false},
      Fecha: { type: DataTypes.DATE, allowNull: false}, 
      pielIntegra: { type: DataTypes.BOOLEAN, allowNull: true},
      observacion_Piel: { type: DataTypes.STRING(800), allowNull: true},
      percepcion_sensorial: { type: DataTypes.INTEGER, allowNull: true}, 
      exposicion_humedad : { type: DataTypes.INTEGER, allowNull: true}, 
      actividad: { type: DataTypes.INTEGER, allowNull: true},
      movilidad: { type: DataTypes.INTEGER, allowNull: true},
      nutricion: { type: DataTypes.INTEGER, allowNull: true},
      friccion_cizallamiento:  { type: DataTypes.INTEGER, allowNull: true},
      puntajeTotal_Braden: { type: DataTypes.INTEGER, allowNull: true},
      observaciones_Braden: { type: DataTypes.STRING, allowNull: true},
      banarse: { type: DataTypes.INTEGER, allowNull: true},
      comer: { type: DataTypes.INTEGER, allowNull: true},
      usar_retrete: { type: DataTypes.INTEGER, allowNull: true},
      subir_escalera: { type: DataTypes.INTEGER, allowNull: true},
      vestirse: { type: DataTypes.INTEGER, allowNull: true},
      ctrl_deposicion: { type: DataTypes.INTEGER, allowNull: true},
      ctrl_miccion: { type: DataTypes.INTEGER, allowNull: true},
      caminar: { type: DataTypes.INTEGER, allowNull: true},
      traslado_silla_cama: { type: DataTypes.INTEGER, allowNull: true},
      total_puntaje_val: { type: DataTypes.INTEGER, allowNull: true},
      Observaciones_val : { type: DataTypes.STRING, allowNull: true},
      PlandeCuidados : { type: DataTypes.STRING, allowNull: true},
      EducacionPaciente : { type: DataTypes.STRING, allowNull: true},
      fecha_creacion: {type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.Now},
      id_usu: { type: DataTypes.INTEGER, allowNull: false},
      iden_pac: { type: DataTypes.STRING, allowNull: true},
      Observacion_gral: {type: DataTypes.STRING(800), allowNull: true},
      ruta_PDF: {type: DataTypes.STRING(200), allowNull: true}
    });
  
    return valoracion;
  };
  
  