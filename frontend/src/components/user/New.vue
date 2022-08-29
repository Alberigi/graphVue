<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <v-layout column class="ma-3">
          <h1 class="headline">Novo Usuário</h1>
          <v-divider class="mb-3" />
          <div v-if="erros">
            <Erros :erros="erros" />
          </div>
          <v-text-field label="Nome" v-model="user.name" />
          <v-text-field label="E-mail" v-model="user.email" />
          <v-text-field label="Senha" v-model="user.password" type="password" />
          <v-select
            label="Perfis"
            v-model="user.role"
            :items="rolesSelected"
            item-value="type"
            item-text="type"
            solo
          />
          <v-btn round color="primary" class="ml-0 mt-3" @click="submit">
            Novo Usuário
          </v-btn>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout column class="ma-3">
          <h1 class="headline">Resultado</h1>
          <v-divider />
          <template v-if="data">
            <v-text-field label="ID" readonly v-model="data.id" />
            <v-text-field label="Nome" readonly v-model="data.name" />
            <v-text-field label="Email" readonly v-model="data.email" />
            <v-text-field label="Perfis" readonly :value="data.role" />
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
      user: {},
      roles: [],
      data: null,
      erros: null,
    };
  },
  computed: {
    rolesSelected() {
      if (this.roles.length) {
        return this.roles.map((role) => role.type);
      } else {
        return null;
      }
    },
  },
  methods: {
    ...mapActions(["getRoles", "newUser"]),
    submit() {
      this.newUser(this.user)
        .then((result) => {
          this.data = result;
          this.user = {};
          this.erros = null;
        })
        .catch((error) => {
          this.erros = error;
        });
    },
    getAllRoles() {
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
    this.getAllRoles();
  }
};
</script>

<style></style>