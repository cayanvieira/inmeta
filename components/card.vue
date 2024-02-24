<template>
  <div v-if="cardData?.imageUrl">
    <v-card
      width="300px"
      height="380px"
      class="mx-2 rounded-0 rounded-t"
      style="background-color: #616161"
      @click="openDialog ? (cardDialog = !cardDialog) : null"
    >
      <v-card-title class="d-flex justify-center text-white">
        {{ cardData?.name }}
      </v-card-title>
      <v-divider></v-divider>
      <div style="background-color: white" class="py-5">
        <v-img
          v-if="cardData.imageUrl"
          class="mx-auto"
          cover
          :width="200"
          aspect-ratio="1/1"
          :src="cardData.imageUrl"
        ></v-img>
      </div>
    </v-card>

    <v-dialog
      v-model="cardDialog"
      class="d-flex justify-center"
      width="auto"
      v-if="openDialog"
    >
      <v-card
        width="300px"
        height="380px"
        class="mx-2 rounded-0 rounded-t"
        style="background-color: #616161"
      >
        <v-card-title class="d-flex justify-center text-white">
          {{ cardData?.name }}
        </v-card-title>
        <v-divider></v-divider>
        <div style="background-color: white" class="py-5">
          <v-img
            v-if="cardData.imageUrl"
            class="mx-auto"
            cover
            :width="200"
            aspect-ratio="1/1"
            :src="cardData.imageUrl"
          ></v-img>
        </div>
      </v-card>
      <v-card
        class="overflow-auto mx-2 rounded-0 rounded-b"
        width="300px"
        height="150px"
        style="
          background-color: #616161;
          scrollbar-width: thin;
          scrollbar-color: #ffca28 #616161;
        "
      >
        <v-divider></v-divider>
        <v-card-title class="d-flex justify-center text-white">
          Descrição
        </v-card-title>
        <v-divider color="white"></v-divider>
        <v-card-text class="d-flex justify-center text-white">
          {{ cardData?.description }}
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    cardData: Object,
    openDialog: Boolean,
  },
  data() {
    return {
      cardDialog: false,
    };
  },
};
</script>

<style >
</style>