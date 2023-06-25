import {BaseApiService} from './api'

class AuthenticationService extends BaseApiService {
    async login(email: string, password: string) {
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

    async register(name: string, email: string, password: string) {
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
}

export default new AuthenticationService()