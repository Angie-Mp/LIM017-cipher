//botones del menu
denunciar.addEventListener("click" ,function(){
  location.href = ("./html/denuncia.html");
});
ver_denuncia.addEventListener("click" ,function(){
  location.href = ("./html/ver_denuncia.html");
})
//boton volver al menu
function volver_menu(){
  location.href = ("../index.html")
}
//al ingresar el texto sec pone en mayus por default
function mayus(e) {
  e.value = e.value.toUpperCase();
}
//enviar el texto
function enviar(){
  var data = document.getElementById("menDescifrado").value;
  localStorage.setItem("almacenar", data.toLowerCase());
  alert("Denuncia Enviada");
   location.href = ("index2.html");
   console.log("enviar")
   var data= document.getElementById("desplazamiento").value;
   localStorage.setItem("almacenar2",data);
   location.href = ("../index.html");
  };
//ver el texto enviado
function verMensaje(){
  document.getElementById("ingreTexto").value=localStorage.getItem("almacenar");
  document.getElementById("desplazamiento").value=localStorage.getItem("almacenar2");
    }
//solo permite texto y no numeros
function soloLetras(event) {
  key = event.keyCode || event.which;
  tecla = String.fromCharCode(key).toLowerCase();
  letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
  tecla_numero = false
      if(letras.indexOf(tecla) == -1 && !tecla_numero)
      return false;
   }
 

