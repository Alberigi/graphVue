<template>
  <v-container fluid>
    <v-layout column>
      <v-flex>
        <div v-if="erros" class="mb-4">
          <Erros :erros="erros" />
        </div>
      </v-flex>
      <v-flex>
        <v-data-table
          :headers="headers"
          :items="users"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.email }}</td>
            <td>{{ props.item.role }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Erros from "../comum/Erros";

export default {
  components: { Erros },
  props:{
    users:{
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      erros: null,
      headers: [
        { text: "ID", value: "id" },
        { text: "Nome", value: "name" },
        { text: "E-mail", value: "email" },
        { text: "Perfis", value: "perfis" },
      ],
    };
  },
};
</script>

<style></style>