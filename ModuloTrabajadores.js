module.exports  = {
    Trabajadores : Trabajadores
  }    
    function Trabajadores() {
    var err = new Error("Para tener salario necesita haber trabajado mas de 1 hora!!!");
    var CostoTotal = 0.0, Persona1 = 0.0, Persona2 = 0.0, Persona3 = 0.0, Persona4 = 0.0, Persona5 = 0.0, Persona6 = 0.0;
    var totalHoras = 0.0, horas1 = 40, horas2 = 0, horas3 = 60, horas4 = 60, horas5 = 40, horas6 = 40;
    var pagoPorHora = 8;
    var holgura = 0.08, cantidadHolgura = 0.0, Materiales = 500.00, costoTotalProyecto = 0.0, totalProyectoMasHolgura = 0.0;
    if(horas1 <= 0 ){
        console.log(err);
    }else{
    Persona1 = (horas1*pagoPorHora);
    }
    if(horas2 <= 0 ){
        console.log(err.stack);
    }else{
    Persona2 = (horas2*pagoPorHora);
    }
    if(horas3 <= 0 ){
        console.log(err);
    }else{
    Persona3 = (horas3*pagoPorHora);
    }
    if(horas4 <= 0 ){
        console.log(err);
    }else{
    Persona4 = (horas4*pagoPorHora);
    }
    if(horas5 <= 0 ){
        console.log(err);
    }else{
    Persona5 = (horas5*pagoPorHora);
    }
    if(horas6 <= 0 ){
        console.log(err);
    }else{
    Persona6 = (horas6*pagoPorHora);
    }
    CostoTotal = Persona1 + Persona2 + Persona3 + Persona4 + Persona5 + Persona6;
    totalHoras = horas1 + horas2 + horas3 + horas4 + horas5 + horas6;
    costoTotalProyecto = CostoTotal + Materiales;
    cantidadHolgura = costoTotalProyecto * holgura;
// ************PRIMER PUNTO IMPRIMIENDO PRECIO DE CADA PERSONA SEGUN LAS HORAS TRABAJADAS*****************
    console.log("El precio de la persona 1 es: " + "$" + Persona1);
    console.log("El precio de la persona 2 es: " + "$" + Persona2);
    console.log("El precio de la persona 3 es: " + "$" + Persona3);
    console.log("El precio de la persona 4 es: " + "$" + Persona4);
    console.log("El precio de la persona 5 es: " + "$" + Persona5);
    console.log("El precio de la persona 6 es: " + "$" + Persona6);
//**************************SEGUNDO PUNTO PRESENTAR UNA HOLGURA DEL 8% *********************************** 
    console.log("La holgura para este proyecto sera de: " + "$" + cantidadHolgura);
//**************************TERCER PUNTO COSTO DE TODOS LOS EMPLEADOS TOMANDO LAS HORAS DE CADA UNO *******
    console.log("Costo total de empleados: " + "$" + CostoTotal);
//**************************CUARTO PUNTO COSTO TOTAL DEL PROYECTO MATERIALES + HORAS DE ******
    console.log("Costo total del proyecto: " + "$" + costoTotalProyecto);
};


