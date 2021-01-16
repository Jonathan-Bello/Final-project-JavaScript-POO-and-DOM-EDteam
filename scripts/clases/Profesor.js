import Usuario from "./Usuario.js"

export default class Professor extends Usuario{
    constructor (nombres, apellidos, correo, activo, cursosDictados, calificacion){
        super(nombres,apellidos,correo,activo)
        this.cursosDictados = cursosDictados
        this.calificacion = calificacion
    }

    getCursosDictados (){
        return this.cursosDictados
    }

    getCalificacion () {
        return this.calificacion
    }

    setCursosDictados (newCursos){
        this.cursosDictados = newCursos
    }
    setCalificiacion (newCalificacion){
        this.calificacion = newCalificacion
    }

}
