<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <v-layout column class="ma-3">
          <h1 class="headline">Excluir Usuário</h1>
          <v-divider class="mb-3" />
          <div v-if="erros">
            <Erros :erros="erros" />
          </div>
          <v-text-field label="ID" v-model.number="filter.id" />
          <v-text-field label="E-mail" v-model="filter.email" />

          <v-btn round color="error" class="ml-0 mt-3" @click="submit">
            Excluir Usuário
          </v-btn>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout column class="ma-3">
          <h1 class="headline">Resultado</h1>
          <v-divider />
          <template v-if="deletedUser">
            <v-text-field label="ID" readonly v-model="deletedUser.id" />
            <v-text-field label="Nome" readonly v-model="deletedUser.name" />
            <v-text-field label="E-mail" readonly v-model="deletedUser.email" />
          </template>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import Erros from "../comum/Erros";

export default {
  components: { Erros },
  data() {
    return {
      filter: {},
      deletedUser: null,
      erros: null,
    };
  },
  methods: {
    ...mapActions(["deleteUser"]),
    submit() {
      this.deleteUser(this.filter)
        .then((result) => {
          this.deletedUser = result;
          this.filter = {};
          this.erros = null;
        })
        .catch((error) => {
          this.erros = error;
        });
    },
  },
};
</script>

<style></style>