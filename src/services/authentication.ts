import {BaseApiService} from './api'
import router from '../router'

class AuthenticationService extends BaseApiService {
    async login(email: string, password: string): Promise<LoginResponse> {
        try {
            const response = await this.getApi().post('/login', {
                email: email,
                password: password
            })
            return response.data
        } catch (e) {
            return e.response.data;
        }
    }

    async register(name: string, email: string, password: string): Promise<RegistrationResponse> {
        try {
            const response = await this.getApi().post('/register', {
                name: name,
                email: email,
                password: password
            })
            return response.data
        } catch (e) {
            return e.response.data
        }
    }

    async confirm(id: string): Promise<boolean> {
        try {
            const response = await this.getApi().post('/confirm', {
                id: id,
            })
            return response.data.success
        } catch (e) {
            return e.response.data.success
        }
    }

    async whoami(): Promise<User> {
        const response = await this.getApi().get('/whoami')
        return response.data.user
    }
}

class LoginResponse {
    success: boolean
    token: string
}

class RegistrationResponse {
    success: boolean
    error: string
}

class User {
    id: string
    name: string
    email: string
    lastLogin: bigint
    active: boolean
}

export default new AuthenticationService()