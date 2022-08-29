<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <v-layout column class="ma-3">
          <h1 class="headline">Excluir Perfil</h1>
          <v-divider class="mb-3" />
          <div v-if="erros">
            <Erros :erros="erros" />
          </div>
          <v-text-field label="ID" v-model.number="filter.id" />
          <v-text-field label="Nome" v-model="filter.type" />

          <v-btn round color="error" class="ml-0 mt-3" @click="submit">
            Excluir Perfil
          </v-btn>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout column class="ma-3">
          <h1 class="headline">Resultado</h1>
          <v-divider />
          <template v-if="data">
            <v-text-field label="ID" readonly v-model="data.id" />
            <v-text-field label="Nome" readonly v-model="data.type" />
          </template>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Erros from "../comum/Erros";
import { mapActions } from "vuex";

export default {
  components: { Erros },
  data() {
    return {
      filter: {},
      data: null,
      erros: null,
    };
  },
  methods: {
    ...mapActions(["deleteRole"]),
    submit() {
      this.deleteRole(this.filter)
        .then((result) => {
          this.data = result;
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