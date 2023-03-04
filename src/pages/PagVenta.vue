<template >
    <div id="contenedor">


        <div class="cont">
            <div class="datos">
                <div class="mb-3">
                    <label for="" class="form-label">Numero de Venta:</label>
                    <input class="form-control" type="text" v-model="numeroVenta">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Cedula:</label>
                    <input class="form-control" type="text" v-model="cedula">
                </div>
            </div>
            <button id="btnG" v-on:click="realizarVenta" class="btn btn-primary">Guardar</button>

        </div>

        <div class="cont">
            <div class="cont1">
                <div class="mb-3">
                    <label for="" class="form-label">Codigo de barras:</label>
                    <input class="form-control" type="text" v-model="codigoBarras">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Cantidad:</label>
                    <input class="form-control" type="text" v-model="cantidad">
                </div>
            </div>
            <button id="btnG" v-on:click="agregarALista" class="btn btn-primary">Agregar</button>

        </div>

    </div>
    <h2>{{ total }}</h2>
    <table class="table table-success table-striped">
        <thead>
            <tr>
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                
                <th>Precio</th>
                <th>SubTotal</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="p in productosList" :key="p.codigoBarras">
                <td>{{ p.codigoBarras }}</td>
                <td>{{ p.nombre }}</td>
                <td>{{ p.cantidad }}</td>
                
                <td>{{ p.precioUnitario }}</td>
                <td>{{ p.subtotal }}</td>

            </tr>
        </tbody>
    </table>
</template>
<script>

import { agregarCarritoFachada, realizarVentaFachada } from '@/js/VentaPag';
export default {
    data() {
        return {
            productosList: [],
            numeroVenta: null,
            cedula: null,
            cantidad: null,
            codigoBarras: null,
            detalleList: [],
            total: null,
        }
    },

    methods: {
        async agregarCarrito() {
            console.log(this.codigoBarras)

            const prod = {
                codigo: this.codigoBarras,
                cantidad: this.cantidad,
            }
            console.log(prod.codigo);
            return await agregarCarritoFachada(prod)
        },

        async agregarALista() {
            const data = await this.agregarCarrito()
            console.log(data);

            if (data != null) {
                this.productosList.push(data)
            }

            const det = {
                codigo: this.codigoBarras,
                cantidad: this.cantidad,
            }

            this.detalleList.push(det)

        },

        realizarVenta() {
            const venta = {
                numeroVenta: this.numeroVenta,
                cedula: this.cedula,
                listaProd: this.detalleList
            }
            this.total = realizarVentaFachada(venta)
        }
    },


}
</script>
<style >
.datos {
    width: 300px;
    margin: 15px auto;
}

.cont {
    display: inline-flex;
    border: solid;
    padding: 15px;
    border-radius: 25px;
}

.cont1 {
    display: inline-flex;
    border: solid;
    padding: 15px;
    border-radius: 25px;
}

#btnG {
    height: 40px;
    margin: auto 10px;
}

#contenedor {
    display: grid;
    width: 300px;
    margin: 15px auto;
}
</style>