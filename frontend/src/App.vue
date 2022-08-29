<template>
  <v-app>
    <v-content>
      <router-view> </router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",

  methods: {
    ...mapActions(["setUser"]),
  },

  beforeMount() {
    this.setUser(null);
  },
};
</script>