import { ref } from 'vue'

const dbUSers = [
    {
        username: 'teacher',
        password: 'teacher',
        name: 'Teacher',
        role: 'teacher',
        email: 'teacher@carracademy.com',
    },
    {
        username: 'user',
        password: 'user',
        name: 'User One',
        role: 'user',
        email: 'user1@carracademy.com'
    }
]

const isAuthenticated = ref(false)
const user = ref({})

export const useAuth = () => {
    const login = (username, password) => {
        const dbUser = dbUsers.find((u) => u.username === username && u.password === password)
        if (dbUser) {
            const { name, role, email, username } = dbUser
            isAuthenticated.value = true
            user.value = { name, role, email, username }
            return true
        }
        return false
    }

    const logout = () => {
        isAuthenticated.value = false
        user.value = {}
    }
    return {isAuthenticated, user, login, logout}
}