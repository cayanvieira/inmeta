<template>
  <div v-if="trades">
    <v-row>
      <Bar></Bar>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-card class="ma-5">
        <v-col style="background-color: #ffca28">
          <v-card-title class="d-flex justify-center"> Trocas </v-card-title>
        </v-col>

        <v-table>
          <thead>
            <tr>
              <th v-for="item in headers" :key="item">{{ item.title }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in trades"
              :key="item.user"
              @click="(detail = item), (deleteDialog = !deleteDialog)"
            >
              <td>{{ item.user.name }}</td>
              <td>{{ item.tradeCards[0].card.name }}</td>
              <td>{{ item.tradeCards[1].card.name }}</td>
              <td>{{ formatDate(item.createdAt) }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-btn
          v-for="item in pages"
          :key="item"
          class="mx-1"
          slim
          variant="flat"
          density="compact"
          :icon="`mdi-numeric-${item.page}`"
          @click="fetch(item.page)"
        >
          {{ item.page }}
        </v-btn>
      </v-col>
    </v-row>
    <v-dialog v-model="deleteDialog" width="400px">
      <v-card class="d-flex align-center">
        <v-card-title>Deseja deletar essa troca ?</v-card-title>

        <div class="mb-2">
          <v-btn @click="deleteTrade(detail)" color="#ffca28" class="mr-2">
            confirmar
          </v-btn>
          <v-btn
            @click="deleteDialog = !deleteDialog"
            color="red"
            class="text-black"
          >
            cancelar
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Trade from "~/components/trade.vue";
import Bar from "../components/bar.vue";

export default {
  components: {
    Trade,
    Bar,
  },
  data() {
    return {
      trades: null,
      headers: [
        { title: "Usuário", key: "user.name" },
        { title: "Ofereceu", key: "tradeCards[0].card.name" },
        { title: "Recebeu", key: "tradeCards[1].card.name" },
        { title: "Data", key: "createdAt" },
      ],
      page: null,
      pages: [],
      formatDate: (str) => {
        return str.split("T")[0].split("-").reverse().join("-");
      },
      detail: null,
      deleteDialog: false,
    };
  },
  created() {
    this.fetch(this.page);
  },
  methods: {
    async fetch(page) {
      const pageFrom = page ? page : 1;
      const data = await this.$store.trade.fetch(pageFrom);
      this.page = data.page;

      if (data.more) {
        this.dynamicPages(pageFrom);
      }

      return (this.trades = data.list);
    },
    dynamicPages(atualPage) {
      let listPages = [];

      for (let i = 1; i < 4; i++) {
        if (atualPage === 1) {
          listPages.push({ page: atualPage - 1 + i });
        } else {
          listPages.push({ page: atualPage - 2 + i });
        }
      }
      return (this.pages = listPages);
    },
    async deleteTrade(value) {
      const data = await this.$store.trade.delete(value.id);
      this.deleteDialog = false;
      this.fetch(this.page);
      return data;
    },
  },
};
</script>

<style>
</style>