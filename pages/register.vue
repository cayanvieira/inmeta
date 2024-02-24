<template>
  <div
    class="h-screen w-screen d-flex align-center justify-center"
    color="grey-darken-2"
    style="background-color: #616161"
  >
    <div class="mt-10">
      <FormRegister />
    </div>
  </div>
</template>

<script>
import FormRegister from "../components/formRegister.vue";
export default {
  components: { FormRegister },
  data: () => {
    return {};
  },
};
</script>

<style>
.img-flag {
  border-radius: 50%;
}
</style>