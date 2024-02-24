import authStore from './auth'
import cardStore from './cards'
import tradeStore from './trade'
import userStore from './user'
export default class Store {

    get auth() {
        return authStore()
    }
    get user() {
        return userStore()
    }
    get cards() {
        return cardStore()
    }
    get trade() {
        return tradeStore()
    }

}