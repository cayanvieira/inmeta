<template>
  <div v-if="user">
    <v-card
      min-width="100vw"
      :height="this.$vuetify.display.width > 1000 ? '250px' : '300px'"
      min-height="20vh"
      elevation="10"
      color="#616161"
    >
      <v-row>
        <v-col :cols="this.$vuetify.display.width > 1000 ? 2 : 12">
          <v-row
            :class="
              this.$vuetify.display.width > 1000
                ? 'ml-10'
                : 'd-flex justify-center'
            "
          >
            <div @click="$router.push('/home')">
              <v-img
                class="ml-10 mt-10"
                max-width="200px"
                width="180px"
                min-width="160px"
                src="/img/logoIcon.png"
              ></v-img>
            </div>
          </v-row>
        </v-col>
        <v-col :cols="this.$vuetify.display.width > 1000 ? 7 : 12">
          <div
            :class="
              this.$vuetify.display.width > 1000
                ? 'mx-10'
                : 'd-flex justify-center'
            "
          >
            <v-text-field
              density="compact"
              variant="solo"
              :class="
                this.$vuetify.display.width > 1000
                  ? ' mx-16 my-14'
                  : 'mx-16 my-0'
              "
              hide-details="true"
              single-line
              rounded="16"
              label="Faça sua busca"
            ></v-text-field>
          </div>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card
            :height="this.$vuetify.display.width > 1000 ? 80 : 50"
            color="#ffca28"
            class="d-flex justify-center align-center elevation-0 pa-0 ma-0"
          >
            <div v-for="(item, i) in menu" :key="i">
              <v-btn
                color="transparent"
                elevation="0"
                class="mx-2"
                :to="item.to"
              >
                {{ item.title }}
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      user: null,
      menu: [
        {
          title: "Home",
          to: "/home",
        },
        {
          title: "Minhas cartas",
          to: "/myCards",
        },
        {
          title: "Todas as cartas",
          to: "/cards",
        },
        {
          title: "Lista de Trocas",
          to: "/trades",
        },
      ],
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      return (this.user = await this.$store.user.fetch());
    },
  },
};
</script>
  
  <style>
</style>