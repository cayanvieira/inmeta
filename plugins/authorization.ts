import authStore from '../store/auth.jsx'
export default defineNuxtPlugin(() => {
    const store = authStore()
    const cookie = useCookie('userToken')


    addRouteMiddleware((to, from) => {

        if (cookie.value != undefined) {
            store.setTokenInCookie(cookie.value)
        }

        if (!store['userToken'] && to.path != '/' && to.path != '/register') {
            return navigateTo('/')
        }
    })


})