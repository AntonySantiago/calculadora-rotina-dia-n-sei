import { somar,dividir,multiplicar,subtrair,calcular,excluirbotao,pegarcolecao,salvarcalculo } from "./crud.js"


const ip1 = document.getElementById("ip1")
const ip2 = document.getElementById("ip2")
const soma  = document.getElementById("soma")

const diminui = document.getElementById("diminui")

const dividi = document.getElementById("dividi")

const multiplica = document.getElementById("multiplica")

const h1 = document.getElementById("resultado")

function calcularfinal(funcao,sinal){
    const n1 = Number(ip1.value)
    const n2 = Number(ip2.value)
   const resultado = funcao(n1,n2)
   h1.innerText = resultado
   salvarcalculo(n1,sinal,n2,resultado).catch(console.error)

}
soma.addEventListener("click", function (){
    calcularfinal(somar,"+")
})
diminui.addEventListener("click", function (){
    calcularfinal(subtrair,"-")
})
multiplica.addEventListener("click", function (){
    calcularfinal(multiplicar,"*")
})
dividi.addEventListener("click", function (){
    calcularfinal(dividir,"/")
})
calcular()


