<template>
  <v-container fluid>
    <v-tabs color="grey lighten-3" slider-color="blue">
      <v-tab ripple @click="loadRoles">
        Lista
      </v-tab>

      <v-tab ripple>
        Novo
      </v-tab>

      <v-tab ripple>
        Alterar
      </v-tab>

      <v-tab ripple>
        Excluir
      </v-tab>

      <v-tab-item>
        <List :roles="roles"/>
      </v-tab-item>

      <v-tab-item>
        <New />
      </v-tab-item>

      <v-tab-item>
        <Change />
      </v-tab-item>

      <v-tab-item>
        <Delete />
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import List from "./List";
import New from "./New";
import Change from "./Change";
import Delete from "./Delete";

export default {
  components: { List, New, Change, Delete },
  data() {
    return {
      erros: null,
      roles: [],
    };
  },
  methods: {
    ...mapActions(["getRoles"]),
    loadRoles() {
      this.getRoles()
        .then((result) => {
          this.roles = result;
          this.erros = null;
        })
        .catch((error) => {
          this.erros = error;
        });
    },
  },
  beforeMount(){
    this.loadRoles();
  }
};
</script>

<style></style>