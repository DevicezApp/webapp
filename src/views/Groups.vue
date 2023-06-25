<template>
  <div class="row mt-3 justify-content-center">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <div>
            <font-awesome-icon icon="layer-group"></font-awesome-icon>
            Groups
          </div>
        </div>
        <div class="card-body">
          <p>Groups</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default defineComponent({
  components: {FontAwesomeIcon}
})
</script>