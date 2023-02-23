var alumno1 = new Object;
alumno1.matricula = 1322134047;
alumno1.nombre= "pedro";
alumno1.apellido = "vazquez";
alumno1.anios_nacimiento = "2000";
alumno1.presentacion = function (){
    let anios = 2023-this.anios_nacimiento;
    let texto = "hola mi nombre es: " + this.nombre + " "+ this.apellido + ", tengo"+ anios + "anios";
    return texto;
}