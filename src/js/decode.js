// declaracion de variables
const valorDesplazamiento = document.getElementById("desplazamiento");
const ingresarTexto = document.getElementById("ingreTexto");
const btnDescifrado = document.getElementById("btnDescifrar");
const mensajeDescifrado = document.getElementById("menDescifrado"); 
//función de descifrado
function decode (offset,string) {
    let mensajeDescifrado = "";
    const valorIngresado =parseInt(offset)
       for (i=0; i<string.length; i++){
       let formula = (string.charCodeAt(i) - 65 -valorIngresado-6)%26 + 65;
         mensajeDescifrado += String.fromCharCode(formula);
      }  return mensajeDescifrado;
      }
//button
    const btnDescifrar = () => {
         console.log('valor descifrado');
         console.log(decode(valorDesplazamiento.value,ingresarTexto.value));
         mensajeDescifrado.value = decode(valorDesplazamiento.value,ingresarTexto.value);
    } 
    btnDescifrado.addEventListener("click", btnDescifrar); 



