export interface ValoracionEnfermeria{
    Id_ValSegEnf?: number,    
    Fecha: Date, 
    pielIntegra: boolean,
    observacion_Piel?: string,
    percepcion_sensorial?: number, 
    exposicion_humedad? : number, 
    actividad?: number,
    movilidad?: number,
    nutricion?: number,
    friccion_cizallamiento?:  number,
    puntajeTotal_Braden?: number,
    observaciones_Braden?: string,
    banarse?: number,
    comer?: number,
    lavar_dientes?: number,
    usar_retrete?: number,
    subir_escalera?: number,
    vestirse?: number,
    ctrl_deposicion?: number,
    ctrl_miccion?: number,
    caminar?: number,
    traslado_silla_cama?: number,
    total_puntaje_val?: number,
    Observaciones_val?: string,
    PlandeCuidados?: string,
    EducacionPaciente?: string,
    iden_pac: string,
    id_usu: number,
    Observacion_gral?: string,
    ruta_PDF?: string
}