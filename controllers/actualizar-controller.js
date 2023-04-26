import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]")

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null){
        window.location.href = "error.html";
    }
    
    const nombreFantasma = document.querySelector("[editar-nombreFantasma]")
    const nombreAdoptante = document.querySelector("[editar-nombreAdoptante]")
    const fechaAdopcion = document.querySelector("[editar-fechaAdopcion]")
    const direccion = document.querySelector("[editar-direccion]")

    try{    
        const perfil = await clientServices.detalleCliente(id)
        if(perfil.nombreFantasma && perfil.nombreAdoptante && perfil.fechaAdopcion && perfil.direccion){
            nombreFantasma.value = perfil.nombreFantasma;
            nombreAdoptante.value = perfil.nombreAdoptante;
            fechaAdopcion.value = perfil.fechaAdopcion;
            direccion.value = perfil.direccion;
        }else{
            throw new Error();
        }
    }catch(error){
        window.location.href = "error.html";
    } 
};    
    
    obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    

    const nombreFantasma = document.querySelector("[editar-nombreFantasma]").value;
    const nombreAdoptante = document.querySelector("[editar-nombreAdoptante]").value;
    const fechaAdopcion = document.querySelector("[editar-fechaAdopcion]").value;
    const direccion = document.querySelector("[editar-direccion]").value;
    console.log(nombreFantasma, nombreAdoptante, fechaAdopcion, direccion);
    clientServices.actualizarCliente(nombreFantasma, nombreAdoptante, fechaAdopcion, direccion, id).then(() => {
        window.location.href = "edicion_concluida.html";
        });
});   

