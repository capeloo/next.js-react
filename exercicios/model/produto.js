export default class Produto {
    #id
    #nome 
    #valor

    constructor(id, nome, valor) {
        this.#id = id
        this.#nome = nome 
        this.#valor = valor
    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }

    get valor(){
        return this.#valor
    }
}