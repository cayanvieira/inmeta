import { createPinia, defineStore } from 'pinia';
import { createApp } from 'vue';
import App from '../app.vue';
import authStore from '../store/auth.jsx';

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)



const user = defineStore('trade', {
    state: () => ({

    }),
    getters: {
    },
    actions: {

        async fetch(page, rpp) {
            if (!page) {
                page = 1
            }
            if (!rpp) {
                rpp = 10
            }
            const authStoreOptions = authStore()
            return await $fetch("https://cards-marketplace-api.onrender.com/trades", {
                method: "GET",
                query: {
                    "rpp": rpp,
                    "page": page
                },
                headers: { Authorization: authStoreOptions['userToken'] }
            })
        },
        async delete(id) {
            const authStoreOptions = authStore()
            return await $fetch(`https://cards-marketplace-api.onrender.com/trades/${id}`, { method: "DELETE", headers: { Authorization: authStoreOptions['userToken'] } })
        }

    }
})

export default user