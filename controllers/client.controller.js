import { clientServices } from "../service/client-service.js";

const crearNuevaLinea = (nombreFantasma, nombreAdoptante, fechaAdopcion, direccion, id) => {
    const linea = document.createElement("tr");
    const contenido = `<tr>
        <td class="td" data-td>${ nombreFantasma }</td>
        <td>${ nombreAdoptante }</td>
        <td>${ fechaAdopcion }</td>
        <td>${ direccion }</td>
        <td>
        <ul class="table__button-control">
            <li>
                <a href="editar_cliente.html?id=${id}"
                class="simple-button simple-button--edit"
                >Editar</a>
            </li>
            <li>
                <button class="simple-button simple-button--delete"
                    type="button" id="${id}"
                    >Eliminar
                </button>
            </li>
        </ul>
        </td>
    </tr>`;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button")
    btn.addEventListener("click", () => {
        const id = btn.id
        clientServices.eliminarCliente(id).then( respuesta => {
            console.log(respuesta)
        }).catch(err => alert("Ocurrió un error"));
    });
    return linea;
};

const table = document.querySelector("[data-table]");

clientServices
.listaClientes()
.then((data) => {
    data.forEach(({nombreFantasma, nombreAdoptante, fechaAdopcion, direccion, id}) => {
        const nuevaLinea = crearNuevaLinea(nombreFantasma, nombreAdoptante, fechaAdopcion, direccion, id);
        table.appendChild(nuevaLinea);
    });
})

