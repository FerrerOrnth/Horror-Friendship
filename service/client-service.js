const listaClientes = () =>
    fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearProducto = ( categoria, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoria, nombre, precio, descripcion, id: uuid.v4() }),
    });
};

const eliminarCliente =  (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    });
};

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json()
    );
};

const actualizarCliente = ( categoria, nombre, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ categoria, nombre, precio, descripcion }),
    })
    .then(( respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const clientServices = {
    listaClientes,
    crearProducto,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};


