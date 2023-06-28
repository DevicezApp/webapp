import {BaseApiService} from './api'
import router from '../router'

class InformationService extends BaseApiService {
    async getServerInformation(): Promise<ServerInformation> {
        try {
            const response = await this.getApi().get('/')
            return response.data
        } catch (e) {
            await router.push({
                path: '/error',
                query: {message: e.message}
            })
        }
    }
}

class ServerInformation {
    organisationName: string
    organisationUrl: string
    frontendUrl: string
    registration: boolean
}

export default new InformationService()