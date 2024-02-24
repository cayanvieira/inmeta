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
import Card from "../components/card.vue";
export default {
  components: {
    Card,
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
    async fetch() {
      return (this.cards = await this.$store.user.myCards());
    },
  },
};
</script>
  
  <style>
</style>