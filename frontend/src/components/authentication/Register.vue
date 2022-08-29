<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <v-layout column class="ma-3">
          <h1
            style="font-size: 3rem; text-align: center; color: blue; margin: 2rem 0rem"
          >
            Registrar
          </h1>
          <div v-if="erros">
            <Erros :erros="erros" />
          </div>
          <v-text-field solo height="1rem" label="Nome" v-model="form.name" />
          <v-text-field
            solo
            height="1rem"
            label="E-mail"
            v-model="form.email"
          />
          <v-text-field
            solo
            height="1rem"
            label="Senha"
            v-model="form.password"
            type="password"
          />
          <v-btn round color="primary" class="ml-0 mt-3" @click="submit">
            Registrar
          </v-btn>
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
      form: {},
      erros: null,
    };
  },
  methods: {
    ...mapActions(["setUser", "register"]),
    async submit() {
      this.register(this.form)
        .then((result) => {
          if (result) this.$router.push("/");
        })
        .catch((error) => {
          this.erros = error;
        });
    },
  },
};
</script>