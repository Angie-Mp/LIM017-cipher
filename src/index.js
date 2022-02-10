import cipher from './cipher.js';
cipher.encode;
cipher.decode;
// declarar variables
const valorDesplazamiento = document.getElementById("desplazamiento");
const ingresarTexto = document.getElementById("ingreTexto");
const btnCifrado = document.getElementById("btnCifrar");
const btnDescifrado = document.getElementById("btnDescifrar");
const mensajeDescifrado = document.getElementById("menDescifrado"); 

const mensajeDescifrado2 = document.getElementById("menDescifrado2"); 
const valorDesplazamiento2 = document.getElementById("desplazamiento2");
const ingresarTexto2 = document.getElementById("ingreTexto2");
//button cifrado
  const btnCifrar = () => {
        console.log('valor cifrado');
        console.log(cipher.encode(valorDesplazamiento.value,ingresarTexto.value));
        mensajeDescifrado.value = cipher.encode(valorDesplazamiento.value,ingresarTexto.value);
   } 
   btnCifrado.addEventListener("click", btnCifrar);

//button descifrado
    const btnDescifrar = () => {
         console.log('valor descifrado');
         console.log(cipher.decode(valorDesplazamiento2.value,ingresarTexto2.value));
         mensajeDescifrado2.value = cipher.decode(valorDesplazamiento2.value,ingresarTexto2.value);
    } 
    btnDescifrado.addEventListener("click", btnDescifrar); 
    console.log(cipher);
