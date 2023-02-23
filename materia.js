var materia1 = new Object;
materia1.nombre = "progrmacion orientada a objetos";
materia1.profesor = "beni";
materia1.unidades = "2 unidades";
materia1.horas = 6;
materia1.grupo = "4223IS";
materia1.aula1= 30;
materia1.presentacion = function (){
    let texto = "la materia es: " +  this.nombre + ", impartida por: " + this.profesor + ", tendra: " + this.unidades;
    return texto;

}
materia1.aula = function (){
    let texto = "en el aula " + this.aula1 + " estara el grupo " + this.grupo + ", tendra un total de " + this.horas + " horas a la semana ";
    return texto;
}
