<template>
  <v-toolbar
    v-if="user"
    color="primary"
    style="color: white"
    prominent
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Bem Vindo {{ user.name }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn style="color: white" icon @click="logout">
      <v-icon>logout</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["user"]),
    roles() {
      if (!this.user && !this.user.roles) return null;
      return this.user.roles;
    },
  },
  methods: {
    ...mapActions(["setUser"]),
    logout() {
      this.setUser(null);
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>