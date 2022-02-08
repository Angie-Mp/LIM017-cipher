  // declarar variables
  const valorDesplazamiento = document.getElementById("desplazamiento");
  const ingresarTexto = document.getElementById("ingreTexto");
  const btnCifrado = document.getElementById("btnCifrar");
  const mensajeDescifrado = document.getElementById("menDescifrado"); 
  //funcion de cifrado
  function encode (offset,string) {
     let mensajeDescifrado = "";
     const valorIngresado = parseInt(offset);
        for (i=0; i<string.length; i++){
        let formula = (string.charCodeAt(i) - 65 + valorIngresado)%26 + 65;
          mensajeDescifrado += String.fromCharCode(formula);
       }  return mensajeDescifrado;
       }
  //button
     const btnCifrar = () => {
          console.log('valor cifrado');
          console.log(encode(valorDesplazamiento.value,ingresarTexto.value));
          mensajeDescifrado.value = encode(valorDesplazamiento.value,ingresarTexto.value);
     } 
     btnCifrado.addEventListener("click", btnCifrar);
  