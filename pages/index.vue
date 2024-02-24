<template >
  <div
    class="h-screen w-screen d-flex align-center justify-center"
    style="background-color: #616161"
  >
    <div class="d-flex align-top justify-center" color="blue">
      <LoginCard />
    </div>
  </div>
</template>

<script>
import LoginCard from "../components/loginCard.vue";
export default {
  definePageMeta: () => ({
    layout: "default",
  }),

  components: {
    LoginCard,
  },
  data: () => {
    return {};
  },
};
</script>

<style>
/* body {
  height: 100vh;
  width: 100vw;
} */
</style>