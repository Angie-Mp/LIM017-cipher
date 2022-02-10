const cipher = {

  decode:function (offset,string) {
    let mensajeDescifrado = "";
    const valorIngresado = parseInt(offset);
       for (let i=0; i<string.length; i++){
       let formula = (string.charCodeAt(i) - 65 - valorIngresado)%26 + 65;
         mensajeDescifrado += String.fromCharCode(formula);
      }  
      return mensajeDescifrado;
      },
    ///////
      encode:function (offset,string) {
        let mensajeDescifrado = "";
        const valorIngresado = parseInt(offset);
           for (let i=0; i<string.length; i++){
           let formula = (string.charCodeAt(i) - 65 + valorIngresado)%26 + 65;
             mensajeDescifrado += String.fromCharCode(formula);
          } 
         return mensajeDescifrado;
          }
}

export default cipher;
