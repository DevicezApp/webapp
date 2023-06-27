<template>
  <div class="row mt-3 justify-content-center">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <div>
            <font-awesome-icon icon="computer"></font-awesome-icon>
            Devices
          </div>
        </div>
        <div class="card-body table-responsive">
          <table class="table table-striped table-bordered">
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Platform</th>
              <th>MAC</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="device in devices">
              <th>{{ device.id }}</th>
              <th>{{ device.name }}</th>
              <th>{{ device.macAddress }}</th>
              <th>{{ device.platform }}</th>
              <th>{{ device.online ? 'Online' : 'Offline' }}</th>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import DeviceService from "@/services/device"

export default {
  data() {
    return {
      devices: []
    }
  },
  async created() {
    this.devices = await DeviceService.devices()
  }
}
</script>