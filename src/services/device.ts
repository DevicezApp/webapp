import {ApiError, BaseApiService} from './api'
import router from '../router'

class DeviceService extends BaseApiService {
    async devices(): Promise<Device[]> {
        try {
            const response = await this.getApi().get('/devices')
            return response.data.devices
        } catch (e) {
            throw new ApiError()
        }
    }

    async device(id: string): Promise<Device> {
        try {
            const response = await this.getApi().get(`/device/${id}`)
            return response.data.device
        } catch (e) {
            throw new ApiError(e.response.data.error)
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