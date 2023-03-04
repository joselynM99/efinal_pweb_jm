<template >
    <div>
        <h1>Ingrese los datos</h1>
        <div class="datos">
            <div class="mb-3">
                <label for="" class="form-label">Codigo de Barras:</label>
                <input class="form-control" type="text" v-model="codigoBarras">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Nombre:</label>
                <input class="form-control" type="text" v-model="nombre">
            </div>

            <div class="mb-3">
                <label for="" class="form-label">Categoria:</label>
                <input class="form-control" type="text" v-model="categoria">
            </div>

            <div class="mb-3">
                <label for="" class="form-label">Stock:</label>
                <input class="form-control" type="number" v-model="stock">
            </div>

            <div class="mb-3">
                <label for="" class="form-label">Precio:</label>
                <input class="form-control" type="text" v-model="precio">
            </div>
        </div>


        <button v-on:click="registrar" class="btn btn-primary">Guardar</button>
    </div>
</template>
<script>

import { insertarProductoFachada } from '@/js/ProductoPag';
export default {
    data() {
        return {

            codigoBarras: null,
            nombre: null,
            categoria: null,
            stock: null,
            precio: null,

        }
    },
    methods: {
        registrar() {
            const prod = {
                codigoBarras: this.codigoBarras,
                nombre: this.nombre,
                categoria: this.categoria,
                stock: this.stock,
                precio: this.precio,
            }

            insertarProductoFachada(prod)
        }
    },
}
</script>
<style>
.datos{
    width: 300px;
    margin: 15px auto;
}
</style>