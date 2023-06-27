import {BaseApiService} from './api'
import router from '../router'

class DeviceService extends BaseApiService {
    async devices(): Promise<Device[]> {
        try {
            const response = await this.getApi().get('/devices')
            return response.data.devices
        } catch (e) {
            return e.response.data;
        }
    }
}

class Device {
    id: string
    name: string
    platform: string
    macAddress: string
    lastSeen: bigint
    online: boolean
}

export default new DeviceService()