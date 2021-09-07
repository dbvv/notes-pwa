<template>
  <v-app id="inspire">
    <Login v-if="!authorized"/>
    <div v-if="authorized">Authorized!</div>
  </v-app>

</template>

<script>
  import { mapState } from 'vuex';
  import Login from '@/views/Login.vue';

  export default {
    components: {
      Login,
    },

    computed: mapState({
      authorized: state => state.authorized,
    }),
    
    data: function () {
      return {
        cards: ['Today', 'Yesterday'],
        drawer: null,
        links: [
          ['mdi-inbox-arrow-down', 'Inbox'],
          ['mdi-send', 'Send'],
          ['mdi-delete', 'Trash'],
          ['mdi-alert-octagon', 'Spam'],
        ],
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
