<template>
  <div>
    <v-card :min-width="500" class="pa-5 rounded-lg">
      <v-img class="mx-auto mb-3" :width="150" src="/img/logoIcon.png"></v-img>
      <v-text-field
        class="mx-5"
        label="Nome"
        variant="outlined"
        v-model="form.name"
      ></v-text-field>
      <v-text-field
        class="mx-5"
        label="E-mail"
        variant="outlined"
        v-model="form.email"
      ></v-text-field>
      <v-text-field
        class="mx-5"
        label="Senha"
        variant="outlined"
        type="password"
        v-model="form.password"
      ></v-text-field>
      <v-text-field
        class="mx-5"
        label="Confirmar senha"
        variant="outlined"
        type="password"
        v-model="checkPassword"
      ></v-text-field>
      <v-card-actions class="d-flex justify-center">
        <v-btn variant="outlined" @click="signup()"> Cadastrar </v-btn>
        <v-btn variant="outlined" to="/"> Voltar </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="alertDialog" width="400px" height="200px">
      <v-card class="d-flex justify-center" height="150px">
        <p class="d-flex justify-center mb-3">
          {{ messageDialog }}
        </p>
        <div class="d-flex justify-center mb-2">
          <v-btn color="red" @click="this.alertDialog = false"> Fechar</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      form: {
        name: null,
        email: null,
        password: null,
      },
      checkPassword: null,
      alertDialog: false,
      messageDialog: null,
    };
  },
  methods: {
    async signup() {
      if (this.form.email === null || this.form.name === null) {
        this.messageDialog = "Campos obrigatórios estão vazios.";
        return (this.alertDialog = true);
      }
      if (
        this.checkPassword != this.form.password ||
        !this.checkPassword ||
        !this.form.password
      ) {
        this.messageDialog =
          "As senhas digitadas são diferentes ou estão vazias.";
        return (this.alertDialog = true);
      }

      return await this.$store.user.signup(this.form);
    },
  },
};
</script>

<style>
.img-flag {
  border-radius: 50%;
}
</style>