import { ref } from "vue"
import { defineStore } from "pinia"

interface IUser {
    id: string
    name: string
    age: number
}

export const useCounterStore = defineStore("user", () => {
    const user = ref<IUser>({
        id: "",
        name: "",
        age: null
    })

    function login(userInfo: IUser) {
        user.value = userInfo
    }

    return { login }
})
