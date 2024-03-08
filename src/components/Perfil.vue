<script setup>
    import { ref, onMounted, computed } from "vue";
    import { useRouter } from "vue-router";
    import { differenceInYears } from "date-fns";
    
    const usuario = ref(null);
    const router = useRouter();
    
    onMounted(() => {
        const usuarioId = router.currentRoute.value.params.id;
        usuario.value = usuarios.find((u) => u.id === parseInt(usuarioId));
    });
    
    const usuarios = [
        { id: 1, name: 'Ana ', apellido: 'García', email: 'ana.garcia@example.com', info: 'Desarrolladora web apasionada.', fechaNac: '1990-03-15' },
        { id: 2, name: 'Carlos ', apellido: 'Martínez', email: 'carlos.martinez@example.com', info: 'Diseñador gráfico y amante del arte.', fechaNac: '1985-07-26' },
        { id: 3, name: 'Elena ', apellido: 'Fernández', email: 'elena.fernandez@example.com', info: 'Entusiasta de los viajes y fotógrafa amateur.', fechaNac: '1988-12-10' },
        { id: 4, name: 'David ', apellido: 'López', email: 'david.lopez@example.com', info: 'Programador y entusiasta de la tecnología.', fechaNac: '1995-06-05' },
    ];
    
    const calcularEdad = computed(() => {
        if (usuario.value && usuario.value.fechaNac) {
            const fechaNac = new Date(usuario.value.fechaNac);
            return differenceInYears(new Date(), fechaNac);
        }
        return "";
    });
</script>
    
<template>
    <v-layout row wrap>
            <v-app-bar color="primary" prominent>
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-btn variant="text" icon="mdi-magnify" href="/">Inicio</v-btn>
            <v-spacer></v-spacer>
        
            </v-app-bar>
    
            <v-navigation-drawer v-model="drawer" location="bottom" temporary>
            <v-list :items="items"></v-list>
            </v-navigation-drawer>
    </v-layout>
    <div class="container">
        <div v-if="usuario" class="card">
            <h2 class="titulo">Perfil de {{ usuario.name }}</h2>
            <div class="detalles">
            <div class="item">
                <div class="key">Apellido:</div>
                <div class="value">{{ usuario.apellido }}</div>
            </div>
            <div class="item">
                <div class="key">Fecha de nacimineto:</div>
                <div class="value">{{ usuario.fechaNac }}</div>
            </div>
            <div class="item">
                <div class="key">Edad:</div>
                <div class="value">{{ calcularEdad }}</div>
            </div>
            </div>
        </div>
        </div>
</template>
<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin-left: 80px;
    }
    
    .card {
        background-color: #e8e8e8;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        width: 100%;
    }
    
    .titulo {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
    
    .detalles {
        display: flex;
        flex-direction: column;
    }
    
    .item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    
    .key {
        font-weight: bold;
    }
    
    .value {
        color: #333;
    }
</style>
