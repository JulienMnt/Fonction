/**         Fonction
 * 
 * 
 * Declarer trois variables a="jean" et b="paul" et result
 * 
 * Declarer une fonction checkName(qui possede 2 parametres) qui verifie si les deux noms sont identique 
 * 
 * console log le result
 * 
 */
"use strict";

let a = "jean";
let b = "paul";
let result;
result = checkName(a,b);
function checkName(nom1,nom2){
    if(nom1 == nom2){
        return true;
    }
    else{
        return false;
    }

}

console.log(result);
