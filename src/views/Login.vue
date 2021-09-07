<template>
  <div>
    <v-container>
      <v-layout wrap="">
        <v-flex sm12 md6 offset-md3>
          <v-card elevation="4">
            <v-card-title>Password</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-form>
                <v-text-field 
                  outline 
                  hide-details 
                  label="Password" 
                  type="password" 
                  :rules="[ () => password == correctPassword || 'Password incorrect']"
                  :error-messages="errorMessages"
                  :error="error"
                  v-model="password"></v-text-field>
                <v-divider></v-divider>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="login()" color="info">
                <v-icon left>{{ icons.mdiLogin }}</v-icon>
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
  import {
    mdiLogin,
  } from '@mdi/js';

  export default{
    computed: {

    },

    data: () => {
      return {
        error: false,
        errorMessages: '',

        password: '',
        correctPassword: '1234',

        icons: {
          mdiLogin,
        },
      };
    },

    methods: {
      login() {
        if (this.password != this.correctPassword) {
          this.error = true;
          this.errorMessages = "Wrong password!";
          console.log('wrong password');
          return;
        } else {
          this.$store.dispatch('authorize');

        }
      }
    }
    
  }
</script>

<style scoped>

</style>

