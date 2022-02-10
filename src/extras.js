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


function soloLetras(event) {
    key = event.keyCode || event.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    tecla_numero = false

    if(letras.indexOf(tecla) == -1 && !tecla_numero)
        return false;
}
enviar.addEventListener("click",()=>{
    var data = document.getElementById("menDescifrado").value;
    localStorage.setItem("almacenar", data.toLowerCase());
    alert("Información almacenada");
    // location.href = ("index2.html");
     console.log("enviar")
     ///
     var data= document.getElementById("desplazamiento").value;
     localStorage.setItem("almacenar2",data);
     location.href = ("index.html");
})
verMensaje.addEventListener("click",()=>{
    document.getElementById("ingreTexto2").value=localStorage.getItem("almacenar");
    //
    document.getElementById("desplazamiento2").value=localStorage.getItem("almacenar2");
})


