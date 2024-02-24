import { useCookie } from '#app/composables/cookie'
import { defineStore } from 'pinia'


const auth = defineStore('auth', {
    state: () => ({
        userToken: null
    }),
    getters: {

    },
    actions: {
        async signin(form) {
            try {
                const data = await $fetch("https://cards-marketplace-api.onrender.com/login", { method: 'POST', body: { email: form.email, password: form.password } })

                this.setTokenInCookie(data.token)
                return data
            }
            catch (err) {
                return err.statusCode
            }
        },
        setTokenInCookie(token) {
            const cookie = useCookie('userToken')
            cookie.value = token
            this.userToken = `Bearer ${cookie.value}`
        },
    }
})

export default auth