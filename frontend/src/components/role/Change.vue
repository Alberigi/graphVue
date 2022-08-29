<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <v-layout column class="ma-3">
          <h1 class="headline">Filtrar Perfil</h1>
          <v-divider class="mb-3" />
          <div v-if="erros">
            <Erros :erros="erros" />
          </div>
          <v-text-field label="ID" v-model.number="filter.id" />
          <v-text-field label="Nome" v-model="filter.type" />

          <h1 class="mt-4 headline">Alterar Perfil</h1>
          <v-divider class="mb-3" />
          <v-text-field label="Nome" v-model="role" />
          <v-btn round color="primary" class="ml-0 mt-3" @click="submit">
            Alterar Perfil
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
      role: "",
      data: null,
      erros: null,
    };
  },
  methods: {
    ...mapActions(["updateRole"]),
    submit() {
      this.updateRole({ filter: this.filter, role: this.role })
        .then((result) => {
          this.data = result;
          this.role = "";
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