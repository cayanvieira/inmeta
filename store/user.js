import { createPinia, defineStore } from 'pinia';
import { createApp } from 'vue';
import App from '../app.vue';
import authStore from '../store/auth.jsx';

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)



const user = defineStore('user', {
    state: () => ({

    }),
    getters: {
    },
    actions: {
        async signup(form) {
            const response = await $fetch("https://cards-marketplace-api.onrender.com/register", { method: "POST", body: { email: form.email, name: form.name, password: form.password } })
            return response
        },
        async fetch() {
            const authStoreOptions = authStore()
            return await $fetch("https://cards-marketplace-api.onrender.com/me", { method: "GET", headers: { Authorization: authStoreOptions['userToken'] } })
        },
        async addCard(cardIds) {

            const authStoreOptions = authStore()
            return await $fetch("https://cards-marketplace-api.onrender.com/me/cards", { method: "POST", body: { cardIds }, headers: { Authorization: authStoreOptions['userToken'] } })
        },
        async myCards() {
            const authStoreOptions = authStore()
            return await $fetch("https://cards-marketplace-api.onrender.com/me/cards", { method: "GET", headers: { Authorization: authStoreOptions['userToken'] } })
        },
        async trade(cards) {
            const authStoreOptions = authStore()
            return await $fetch("https://cards-marketplace-api.onrender.com/trades", { method: "POST", body: { cards }, headers: { Authorization: authStoreOptions['userToken'] } })
        }

    }
})

export default user