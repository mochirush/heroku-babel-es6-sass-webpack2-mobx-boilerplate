import { observable, action } from 'mobx'

export default class uiStore {
    @observable ui = {
        loginName: ''
    }

    @action toggle(property) {
        this.ui[property] = !this.ui[property]
    }
    @action show(property) {
        this.ui[property] = true
    }
    @action hide(property) {
        this.ui[property] = false
    }
}