import axios from "axios"
export const agregarCarritoFachada = async (body) => {
    return await agregarCarrito(body)
}

export const realizarVentaFachada = async (body) => {
    return await realizarVenta(body)
}

const agregarCarrito = async (body) => {

    return axios.post(`http://localhost:8081/API/Supermaxi/V1/ventas/agregarProducto`, body).then(r => r.data)
}


const realizarVenta = async (body) => {

   return axios.post(`http://localhost:8081/API/Supermaxi/V1/ventas`, body).then(r => r.data)
}