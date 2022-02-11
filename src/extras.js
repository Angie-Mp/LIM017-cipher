const btn_denunciar= document.getElementById("btn_denunciar");
const btn_verdenuncia= document.getElementById("btn_verdenuncia");
const btn_volver = document.getElementById("btn_volver");
//const soloLetras = document.getElementById("soloLetras");
const enviar = document.getElementById("enviar");
const verMensaje = document.getElementById("verMensaje");

btn_denunciar.addEventListener("click",()=>{
    document.getElementById("uno").style.display="none";
    document.getElementById("dos").style.display="block";
})
btn_verdenuncia.addEventListener("click",()=>{
    document.getElementById("uno").style.display="none";
    document.getElementById("tres").style.display="block";
})
btn_volver.addEventListener("click",()=>{
    document.getElementById("tres").style.display="none";
    document.getElementById("uno").style.display="block";
})

enviar.addEventListener("click",()=>{
    let data = document.getElementById("menDescifrado").value;
    localStorage.setItem("almacenar", data.toLowerCase());
    alert("Información almacenada");
     console.log("enviar")
     //
      data= document.getElementById("desplazamiento").value;
     localStorage.setItem("almacenar2",data);
     location.href = ("index.html");
})
verMensaje.addEventListener("click",()=>{
    document.getElementById("ingreTexto2").value=localStorage.getItem("almacenar");
    //
    document.getElementById("desplazamiento2").value=localStorage.getItem("almacenar2");
})

/* eslint-disable no-unused-vars */
const soloLetras=(event)=> {
   let key = event.keyCode || event.which;
   let tecla = String.fromCharCode(key).toLowerCase();
   let letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
   let tecla_numero = false

    if(letras.indexOf(tecla) == -1 && !tecla_numero)
        return false;
}
function mayus(event) {
    event.value = event.value.toUpperCase();
  }
/* eslint-enable no-unused-vars */

