<script>
    export default {
        data: () => ({
        users: [
            { id: 1, name: 'Ana García', email: 'ana.garcia@example.com', info: 'Desarrolladora web apasionada.', fechaNacimiento: '15/03/1990' },
            { id: 2, name: 'Carlos Martínez', email: 'carlos.martinez@example.com', info: 'Diseñador gráfico y amante del arte.', fechaNacimiento: '25/07/1985' },
            { id: 3, name: 'Elena Fernández', email: 'elena.fernandez@example.com', info: 'Entusiasta de los viajes y fotógrafa amateur.', fechaNacimiento: '10/12/1988' },
            { id: 4, name: 'David López', email: 'david.lopez@example.com', info: 'Programador y entusiasta de la tecnología.', fechaNacimiento: '05/06/1995' },
        ],
        items: [
        { title: 'Configuración' },
        { title: 'Sobre nosotros' },
        { title: 'Cerrar sesión' }
        ],
        }),
    
    };
</script>

<template>
    <v-card>
        <v-layout row wrap>
            <v-app-bar color="primary" prominent>
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-btn variant="text" icon="mdi-magnify">Inicio</v-btn>
            <v-spacer></v-spacer>
            <v-btn variant="text" icon="mdi-magnify"><div class="text-center">
                <v-menu
                open-on-hover
                >
                <template v-slot:activator="{ props }">
                    <v-btn
                    variant="text"
                    v-bind="props"
                    >
                    Configuracion
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
            </v-btn>
            <v-spacer></v-spacer>
            </v-app-bar>
    
            <v-navigation-drawer v-model="drawer" location="bottom" temporary>
            <v-list :items="items"></v-list>
            </v-navigation-drawer>
    
            <v-main>
            <v-layout row wrap justify-space-between>
                <v-card
                v-for="(user, index) in users"
                :key="index"
                class="mx-auto"
                max-width="344"
                >
                <v-img src="https://cdn-icons-png.flaticon.com/512/74/74472.png" height="auto" width="200px"  cover></v-img>
                <v-card-title>{{ user.name }}</v-card-title>
                <v-card-subtitle>{{ user.username }}</v-card-subtitle>
                <v-card-actions>
                    <v-btn :to="'/perfil/' + user.id" color="primary" variant="text">Perfil</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                </v-card-actions>
                <v-expand-transition>
                    <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text>{{ user.info }}</v-card-text>
                    </div>
                </v-expand-transition>
                </v-card>
            </v-layout>
            </v-main>
        </v-layout>
    </v-card>
</template>

<style scoped>
    #app {
        display: flex;
        flex-direction: row;
    }
    .mx-auto{
        margin: 50px;
    }
</style>
