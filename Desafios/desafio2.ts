enum Cargos {
    Atriz,
    Padeiro
}

interface Funcionario {
    nome: string,
    idade: number,
    profissao: Cargos
}

let pessoa1 : Funcionario = {
    nome: "Maria",
    idade: 29,
    profissao: Cargos.Atriz
}

let pessoa2 : Funcionario = {
    nome: "Roberto",
    idade: 19,
    profissao: Cargos.Padeiro
}

let pessoa3 : Funcionario = {
    nome: "Laura",
    idade: 32,
    profissao: Cargos.Atriz
}

let pessoa4 : Funcionario = {
    nome: "Carlos",
    idade: 19,
    profissao: Cargos.Padeiro
}

