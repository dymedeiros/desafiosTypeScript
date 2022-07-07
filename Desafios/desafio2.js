"use strict";
var Cargos;
(function (Cargos) {
    Cargos[Cargos["Atriz"] = 0] = "Atriz";
    Cargos[Cargos["Padeiro"] = 1] = "Padeiro";
})(Cargos || (Cargos = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Cargos.Atriz
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Cargos.Padeiro
};
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Cargos.Atriz
};
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Cargos.Padeiro
};
