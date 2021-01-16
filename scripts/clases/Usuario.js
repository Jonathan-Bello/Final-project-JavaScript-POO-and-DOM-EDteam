export default class Usuario {
    //Constructor
    constructor(nombres,apellidos,correo,activo){
        this.nombres = nombres
        this.apellidos = apellidos
        this.correo = correo
        this.activo = activo
    }

    // Método
    presentase(){
        //como buena practica no se deben de usar conosole.log en metodos
        return `Hola soy ${this.nombres} ${this.apellidos} y mi correo es ${this.correo}`
    }

    // Getters y Setters
    // Get -> Obtener
    // Set -> Dar
    getNombres(){
        return this.nombres
    }
    getApellidos = () => this.apellidos
    getCorreo = () => this.correo
    getActivo = () => this.activo

    setApellido (newNombres){
        this.nombres = newNombres
    }
    setApellido (newApellidos){
        this.apellidos = newApellidos
    }
    setCorreo (newCorreo){
        this.correo = newCorreo
    }
    setActivo (newActivo){
        this.activo = newActivo
    }


}
