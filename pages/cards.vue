<template >
  <v-container
    width="100vw"
    height="100vh"
    fluid
    class="ma-0 pa-0"
    v-if="cards"
  >
    <v-row>
      <Bar></Bar>
    </v-row>
    <v-row>
      <v-col
        v-for="i in 12"
        :key="i"
        :cols="
          this.$vuetify.display.width > 1280
            ? 3
            : this.$vuetify.display.width > 930 &&
              this.$vuetify.display.width < 1279
            ? 4
            : this.$vuetify.display.width > 620 &&
              this.$vuetify.display.width < 930
            ? 6
            : 12
        "
        class="my-2 d-flex justify-center"
      >
        <Card :cardData="cards[i - 1]" class="my-5"></Card>
      </v-col>

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
    </v-row>
  </v-container>
</template>

<script>
import Bar from "../components/bar.vue";
import Card from "../components/card.vue";
export default {
  components: {
    Card,
    Bar,
  },
  data() {
    return {
      cards: null,
      pages: null,
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch(page) {
      const pageFrom = page ? page : 1;

      const data = await this.$store.cards.fetch(pageFrom, 12);
      if (data.more) {
        this.dynamicPages(pageFrom);
      }
      return (this.cards = data.list);
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
  },
};
</script>

<style>
</style>