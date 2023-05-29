import { defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore', {
    state: () => ({
        userNames: [
            { id: 1, name: 'First Name'},
            { id: 2, name: 'Second Name'},
            { id: 3, name: 'Third Name'},
        ]
    })
})