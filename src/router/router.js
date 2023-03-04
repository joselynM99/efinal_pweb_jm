import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/ingresarProducto',
    name: 'producto',
    component: () => import(/* webpackChunkName: "IngresarProducto"*/ '@/pages/IngresarProducto.vue')
  },
  {
    path: '/ventas',
    name: 'ventas',
    component: () => import(/* webpackChunkName: "PagVenta"*/ '@/pages/PagVenta.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
