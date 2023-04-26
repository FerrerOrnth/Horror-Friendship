const listaClientes = () => {
    return fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());
};

const crearCliente = ( nombreFantasma, nombreAdoptante, fechaAdopcion, direccion) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombreFantasma, nombreAdoptante, fechaAdopcion, direccion, id: uuid.v4() }),
    });
};

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    });
};

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json()
    );
};

const actualizarCliente = ( nombreFantasma, nombreAdoptante, fechaAdopcion, direccion, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombreFantasma, nombreAdoptante, fechaAdopcion, direccion }),
    })
    .then(( respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};
