import axios from "axios"
export const insertarProductoFachada = async (body) => {
    await insertarProducto(body)
}

export const buscarProductoFachada = async (codigo) => {
    return await buscarProducto(codigo)
}

const insertarProducto = async (body) => {

    axios.post(`http://localhost:8081/API/Supermaxi/V1/productos`, body).then(r => r.data)
}


const buscarProducto = async (codigo) => {

    axios.get(`http://localhost:8081/API/Supermaxi/V1/productos/${codigo}`).then(r => r.data)
}

