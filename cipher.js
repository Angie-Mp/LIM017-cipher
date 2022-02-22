const cipher = {
  
 encode:function (offset,string) {
  let mensajeDescifradoDos = "";
  const valorIngresado = parseInt(offset); 
   for (let i = 0; i < string.length ; i++){
     if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
       let formula = (string.charCodeAt(i) - 65 + valorIngresado) % 26 + 65;
       mensajeDescifradoDos += String.fromCharCode(formula);
     }
     if(string.charCodeAt(i) === 32){
     mensajeDescifradoDos += " ";
     }
   }
   return mensajeDescifradoDos;
      },
/////////////////////////////////////////////////////////
  decode:function (offset,string) {
    let mensajeDescifrado = "";
    const valorIngresadoDos = parseInt(offset); 
     for (let i = 0; i < string.length ; i++){
       if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
         let formula = (string.charCodeAt(i) + 65 - valorIngresadoDos) % 26 + 65;
         mensajeDescifrado += String.fromCharCode(formula);
       }
     if(string.charCodeAt(i) === 32){
         mensajeDescifrado += " ";
       }
     }
     return mensajeDescifrado;
      },
}
export default cipher;
