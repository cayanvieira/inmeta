<template>
  <v-div v-if="myCards && allCards">
    <v-card>
      <v-rov>
        <v-col class="d-flex justify-center" style="background-color: #ffca28">
          <v-card-title>Qual carta você quer trocar ?</v-card-title>
        </v-col>
      </v-rov>
      <v-row>
        <v-col :cols="this.$vuetify.display.width > 600 ? 6 : 12" class="pt-10">
          <v-row class="d-flex justify-center">
            <Card
              :cardData="cardOffering"
              :openDialog="true"
              class="mb-5"
            ></Card>
          </v-row>
          <v-row class="d-flex justify-center">
            <v-col cols="10">
              <v-select
                :items="myCards"
                v-model="cardOffering"
                item-title="name"
                return-object
                rounded
                hide-details
                label="Sua Carta"
                variant="solo"
              >
              </v-select>
            </v-col>
          </v-row>
        </v-col>
        <v-col :cols="this.$vuetify.display.width > 600 ? 6 : 12" class="pt-10">
          <v-row class="d-flex justify-center">
            <Card
              :cardData="cardReceiving"
              :openDialog="true"
              class="mb-5"
            ></Card>
          </v-row>
          <v-row class="d-flex justify-center">
            <v-col cols="10">
              <v-select
                :items="allCards"
                v-model="cardReceiving"
                item-title="name"
                return-object
                hide-details
                rounded
                label="Carta que você quer."
                variant="solo"
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
          <v-btn class="my-5" @click="trade()" color="#ffca28">
            Solicitar Troca
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-dialog v-model="alertDialog" width="400px" height="200px">
      <v-card class="d-flex justify-center" height="150px">
        <p class="d-flex justify-center mb-3">
          Solicitação de troca feita com sucesso.
        </p>
        <div class="d-flex justify-center mb-2">
          <v-btn color="#ffca28" @click="this.alertDialog = false">
            Fechar</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
  </v-div>
</template>

<script>
import Card from "../components/card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      myCards: [],
      allCards: [],
      cardOffering: null,
      cardReceiving: null,
      alertDialog: false,
    };
  },
  created() {
    this.fetchAllCards();
    this.fetchMyCards();
  },
  methods: {
    async fetchMyCards() {
      return (
        (this.myCards = await this.$store.user.myCards()),
        (this.cardOffering = this.myCards[0])
      );
    },
    async fetchAllCards(page) {
      const pageFrom = page ? page : 1;
      const rpp = 150;
      const data = await this.$store.cards.fetch(pageFrom, rpp);
      return (
        (this.allCards = data.list), (this.cardReceiving = this.allCards[10])
      );
    },
    async trade() {
      const cards = [
        {
          cardId: this.cardOffering.id,
          type: "OFFERING",
        },
        {
          cardId: this.cardReceiving.id,
          type: "RECEIVING",
        },
      ];
      await this.$store.user.trade(cards);

      return (this.alertDialog = true);
    },
  },
};
</script>

<style>
</style>