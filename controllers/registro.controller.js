import { clientServices } from "../service/client-service.js"; 

const formulario = document.querySelector("[dataform]")

formulario.addEventListener("submit", (evento)=> {
    evento.preventDefault()
    const nombreFantasma = document.querySelector("[nombreFantasma]").value;
    const nombreAdoptante = document.querySelector("[nombreAdoptante]").value;
    const fechaAdopcion = document.querySelector("[fechaAdopcion]").value;
    const direccion = document.querySelector("[direccion]").value;

    clientServices
        .crearCliente(nombreFantasma, nombreAdoptante, fechaAdopcion, direccion)
        .then(() => {
        window.location.href = "registro_completado.html"
    }).catch((err) => console.log(err));
});