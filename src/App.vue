<template>
  <v-app id="inspire">
    
    <v-app-bar app>
      <v-icon @click="drawer = !drawer">{{ icons.mdiMenu }}</v-icon>
      <v-toolbar-title>NotesAPP</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
         v-model="drawer"
         fixed
         temporary
         v-if="authorized"
         >
         <v-list>
           <v-list-item 
            v-for="menuItem in menu" 
            :key="menuItem.text" 
            :to="menuItem.link"
            link >
            <v-list-item-icon>
              <v-icon>
                {{menuItem.icon}}
              </v-icon>
            </v-list-item-icon>
            
            <v-list-item-content>
              <v-list-item-title>{{ menuItem.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
         </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <Login v-if="!authorized"/>
        <router-view v-if="authorized"></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import { mapState } from 'vuex';
  import Login from '@/views/Login.vue';
  import {
    mdiMenu,
    mdiSquare,
    mdiCog,
    mdiHome,
  } from '@mdi/js';

  export default {
    components: {
      Login,
    },

    computed: mapState({
      authorized: state => state.authorized,
    }),
    
    data: function () {
      return {
        drawer: null,
        icons: {
          mdiMenu,
          mdiSquare,
          mdiHome,
        },

        menu: [
          {
            icon: mdiHome,
            text: 'Home',
            link: '/',
          },
          {
            icon: mdiCog,
            text: 'Settings',
            link: '/settings',
          }
        ]
      };
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
