<template v-if>
  <div>
    <v-row class="pa-0 ma-0">
      <Bar></Bar>
    </v-row>
    <v-row>
      <v-container v-if="user?.cards != null">
        <v-row>
          <v-col>
            <Trade></Trade>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </div>
</template>
<script>
import Bar from "../components/bar.vue";
import Card from "../components/card.vue";
import Trade from "../components/trade.vue";
export default {
  components: {
    Bar,
    Card,
    Trade,
  },
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      return (this.user = await this.$store.user.fetch());
    },
    async addCard() {
      return await this.$store.user.addCard([
        "17256c34-a706-4797-a21f-9572778f09a0",
        "17d6b5b5-7f9e-4884-bc96-c0725b688f7d",
        "4d9751e7-39a0-4ae6-91f4-79e4fc2ecfbb",
      ]);
    },
  },
};
</script>

<style
>
</style>