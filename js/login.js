function loguear() {


let user=document.getElementById("usuario-administrador").value;
let clave=document.getElementById("pass-administrador").value;

if(user=="Claudio" && clave=="Pipicapo") {
    alert ('Bienvenido');
    window.location="administrador.html";
} else {
    alert("Datos incorrectos")
}
}
