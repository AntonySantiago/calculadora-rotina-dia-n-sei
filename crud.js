import { collection, addDoc, getDocs, onSnapshot, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import {db} from "./firebase.js"

export function somar (n1,n2){
    return n1 + n2
}

export function subtrair (n1,n2){
    return n1 - n2
}
export function dividir (n1,n2){
    return n1 / n2
}
export function multiplicar (n1,n2){
    return n1 * n2
}

export function pegarcolecao(){
    return collection(db,"calculos")
}
export async function salvarcalculo(n1,sinal,n2,resultado){
await addDoc(pegarcolecao(), {n1:n1,sinal:sinal,n2:n2,resultado:resultado})
}
export async function calcular() {
onSnapshot(pegarcolecao(), (consulta)=> {
    const ul = document.getElementById("resultadosanteriores");
    ul.innerHTML = "";
    consulta.forEach(documento => {
        const dados = documento.data()
        const linha = document.createElement("li");
        linha.innerText = `${dados.n1}${dados.sinal}${dados.n2} = ${dados.resultado}`        
        const botao = document.createElement("button")
        botao.innerHTML = "excluir"
        botao.addEventListener("click", async function () {
            await excluirbotao(documento.id)
            
        })
 linha.appendChild(botao)
 ul.appendChild(linha)
    });
})    
}
export async function excluirbotao(id) {
    await deleteDoc(doc(db,"calculos",id))
    
}