import { createRouter, createWebHistory } from 'vue-router';
import Configuracion from './Configuracion.vue';
import Perfil from './Perfil.vue';
import Inicio from './Inicio.vue'

const route = [
    {
        path: '/',
        component: Inicio
    },
    {
        path: '/configuracion',
        component: Configuracion
    },
    {
        path: '/perfil/:id',
        props:true,
        component: Perfil
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: route
})

export default router