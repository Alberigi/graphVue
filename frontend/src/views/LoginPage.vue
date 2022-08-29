<template>
  <v-card height="520px">
    <v-layout row>
      <v-flex sm10>
        <component :is="currentModalComponent" />
      </v-flex>
      <v-flex sm12 class="infoSection">
        <v-card-actions>
          <div class="infoTexts">
            <h2 style="font-size: 3.5rem">Bem Vindo!</h2>
            <p style="margin-top: 1rem; font-size: 1rem">{{ info.text }}</p>
            <v-btn style="border: 2px solid; border-color: white; color: white" flat round @click="changeComponent">{{ info.buttom }}</v-btn>
          </div>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import Register from "../components/authentication/Register.vue";
import Login from "../components/authentication/Login.vue";
export default {
  components: { Register, Login },
  data() {
    return {
      currentModalComponent: "Login",
    };
  },
  computed: {
    info() {
      return this.generateInfo();
    },
  },
  methods: {
    changeComponent() {
      if (this.currentModalComponent === "Register") {
        this.currentModalComponent = "Login";
      } else {
        this.currentModalComponent = "Register";
      }
    },
    generateInfo() {
      const registerInfo = {
        buttom: "Cadastrar",
        text: "Crier sua conta caso ainda não tenha",
      };
      const loginInfo = {
        buttom: "Login",
        text: "Entra no site caso já tenha uma conta",
      };
      return this.currentModalComponent === "Register"
        ? loginInfo
        : registerInfo;
    },
  },
};
</script>

<style lang="css">
.infoTexts{
    text-align: center;
    width: 50%;
    margin: 8rem 11rem;
}
.infoSection {
    background-color: blue;
    color: white;
    height: 520px;
    border-radius: 0rem 1rem 1rem 0rem;
}
.v-card{
    border-radius: 1rem;
    margin: 3.5rem 3rem;
    height: 40vw;
};
</style>