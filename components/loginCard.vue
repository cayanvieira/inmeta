<template>
  <v-card :width="450" class="pa-5 rounded-lg">
    <v-img class="mx-auto" :width="150" src="/img/logoIcon.png"></v-img>

    <v-text-field
      variant="outlined"
      class="ma-5"
      label="E-mail"
      v-model="form.email"
    ></v-text-field>
    <v-text-field
      variant="outlined"
      class="mx-5"
      label="Senha"
      type="password"
      v-model="form.password"
    ></v-text-field>
    <v-card-actions class="d-flex justify-center mb-5">
      <v-btn variant="outlined" @click="signin()">Entrar</v-btn>
      <v-btn variant="outlined" to="/register">Cadastrar</v-btn>
    </v-card-actions>
    <a href="" class="text-caption mx-5">Esqueceu sua senha?</a>
    <v-dialog v-model="alertDialog" width="400px" height="200px">
      <v-card class="d-flex justify-center" height="150px">
        <p class="d-flex justify-center mb-3">
          Erro ao tentar fazer login, tente novamente mais tarde.
        </p>
        <div class="d-flex justify-center mb-2">
          <v-btn color="red" @click="this.alertDialog = false"> Fechar</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data: () => {
    return {
      form: {
        email: null,
        password: null,
      },
      alertDialog: false,
    };
  },
  methods: {
    async signin() {
      const auth = await this.$store.auth.signin(this.form);
      if (auth?.status != 200) {
        this.alertDialog = true;
      }
      if (auth.token) {
        const router = useRouter();
        return router.push("/home");
      }
    },
  },
};
</script>


<style>
.img-flag {
  border-radius: 50%;
}
</style>