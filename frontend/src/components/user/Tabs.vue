<template>
  <v-container fluid>
    <v-tabs color="grey lighten-3" slider-color="blue">
      <v-tab ripple @click="loadUsers">
        Lista
      </v-tab>

      <v-tab ripple>
        Consulta
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
        <List :users="users" />
      </v-tab-item>

      <v-tab-item>
        <Query />
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
import List from "./List.vue";
import Query from "./Query.vue";
import New from "./New.vue";
import Change from "./Change.vue";
import Delete from "./Delete.vue";

export default {
  components: { List, Query, New, Change, Delete },
  data() {
    return {
      erros: null,
      users: [],
    };
  },
  methods: {
    ...mapActions(["getUsers"]),

    loadUsers() {
      this.getUsers()
        .then((result) => {
          this.users = result;
          this.erros = null;
        })
        .catch((error) => {
          this.users = [];
          this.erros = error;
        });
    },
  },
  beforeMount() {
    this.loadUsers();
  },
};
</script>

<style></style>