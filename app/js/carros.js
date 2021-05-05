class Carro{
    constructor(roda, modelo, cor, motor){
        this.roda = roda;
        this.modelo = modelo;
        this.cor = cor;
        this.motor = motor;
    }
    get_modelo(){
        return this.modelo
    }
    get_roda(){
        return this.roda
    }
    get_cor(){
        return this.cor
    }
    get_motor(){
        return this.motor
    }
}
const carro = new Carro("X","Ford","Cinza","Y")
console.log(carro.get_modelo())
console.log(carro.get_roda())
console.log(carro.get_cor())
console.log(carro.get_motor())
