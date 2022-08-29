<template>
  <v-layout column>
    <v-flex>
      <v-flex v-if="user"><LoggedUser /></v-flex>
      <v-tabs centered dark icons-and-text>
        <v-tabs-slider color="white"></v-tabs-slider>
        <v-tab>
          Usuários
          <v-icon>people</v-icon>
        </v-tab>

        <v-tab>
          Perfis
          <v-icon>how_to_reg</v-icon>
        </v-tab>

        <v-tab-item>
          <UserTabs />
        </v-tab-item>

        <v-tab-item>
          <RoleTabs />
        </v-tab-item>
      </v-tabs>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";
import UserTabs from "../components/user/Tabs.vue";
import RoleTabs from "../components/role/Tabs.vue";
import LoggedUser from "../components/authentication/LoggedUser.vue";

export default {
  components: {
    UserTabs,
    RoleTabs,
    LoggedUser,
  },

  methods: {
    ...mapGetters(["user"]),
  },
};
</script>

<style></style>