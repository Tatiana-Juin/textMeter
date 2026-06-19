let textarea = document.getElementById("word-textarea");
// let nbAllWord = document.querySelector(".nb-all-word");
let nbWord = document.querySelector(".nb-word");
let nbCaractere = document.querySelector(".nb-caractere");
let nbSpace = document.querySelector(".nb-space");
let btnValider = document.querySelector(".btn-valider")
let btnReset = document.querySelector(".btn-reset");

btnValider.addEventListener("click", () =>{
    let text = textarea.value.trim();

    // POUR RECUPERER TOUT LES MOT SANS ESPACE 
    let words = text.match(/\S+/g);
    let nbWordWithoutSpace = words ? words.length : 0;
    nbWord.textContent=`${nbWordWithoutSpace } mot sans espace`;

    // POUR RECUPERER TOUS LES CARACTERE Y COMPRIS LES ESPACE
    let nbCaracter = text.length;
    nbCaractere.textContent=`${nbCaracter} caractere avec espace`;

    // POUR COMPTER LE NB D'ESPACE 
    let space = text.match(/ /g);
    nbSpace.textContent=`${space ? space.length : 0 } espace `;

})
// RESET 
btnReset.addEventListener("click",() =>{
    textarea.value ="";
    nbWord.textContent=" 0 mot sans espace";
    nbCaractere.textContent="0 caractere avec espace";
    nbSpace.textContent="0 espace";
    

})