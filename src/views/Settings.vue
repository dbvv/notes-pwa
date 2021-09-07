<template>
  <div>
    <v-list>
      <v-list-item
          v-for="(setting, index) in settings" :key="index"
        >
        <v-list-item-content>
          <v-row>
            <v-col>
              <v-list-item-title>{{ setting.label }}</v-list-item-title>
            </v-col>
            <v-col>
              <v-select
                v-if="setting.type === 'select'"
                :items="setting.options"
                v-model="settings[index].selected"
                ></v-select>
            </v-col>
          </v-row>
        </v-list-item-content>
        
      </v-list-item>
    </v-list>

  </div>
</template>

<script>
  import { defaultSettings } from '@/libs/settings.js';

  export default{
    data: () => {
      return {
        settings: {},
      }
    },

    mounted: function () {
      this.getSettings();
    },

    methods: {
      getSettings() {
        this.settings = defaultSettings;
      },
    },

    watch: {
      'settings.theme.selected': function (newValue) {
        localStorage.setItem('setting.theme', newValue);
        let theme = {};
        theme[newValue] = true;
        this.$vuetify.theme = theme ;
      }
    }
  }
</script>

<style scoped>

</style>

