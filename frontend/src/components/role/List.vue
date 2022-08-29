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
          :items="roles"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.type }}</td>
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
  props: {
    roles: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      erros: null,
      headers: [{ text: "ID", value: "id" }, { text: "Nome", value: "name" }],
    };
  },
};
</script>

<style></style>