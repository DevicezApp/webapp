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
        <div class="card-body">
          <p>Devices</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import {API} from "@/services/api"

export default {
  data() {
    return {
      devices: []
    }
  },
  created() {
    API.get('/devices')
        .then(response => {
          if (response.data.success) {
            this.devices = response.data.devices
            console.log(this.devices)
          }
        })
  }
}
</script>