<template>
    <nav>
    <v-app-bar
        app
        flat
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Todo</span>
          <span>Vuetify</span>
      </v-toolbar-title>
    <v-spacer></v-spacer>


    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          light
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>expand_more</v-icon>
          Menu
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>



      <v-btn text>
          <span>Sign Out</span>
          <v-icon right>mdi_right_to_exit</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      app
      class="primary"
    >
        <v-layout column align-center>
            <v-flex class="mt-5">
                <v-avatar size="100">
                    <img src="/avatar-1.png" alt="">
                </v-avatar>
                <p class="white--text subheading mt-1"> Project Manager </p>
            </v-flex>
            <v-flex class="mt-4 mb-3">
              <Popup />
            </v-flex>
        </v-layout>
        <v-list dense>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route"> 
                <v-list-item-action>
                    <v-icon class="white--text">{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
      
    </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup.vue'
export default {
  components: {
    Popup
  },
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'dashboard', text: "Dashboard", route: '/' },
                { icon: 'folder', text: "My Projects", route: '/projects' },
                { icon: 'person', text: "Team", route: '/team' },
            ]
        }
    }
}
</script>