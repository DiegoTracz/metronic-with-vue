<template>
  <!--begin::Row-->
  <div class="row gy-5 g-xl-10">
    <!--begin::Col-->
    <div class="col-xl-4">
      <MixedWidget12
        widget-classes="card-xl-stretch mb-xl-10"
        widget-color="#F7D9E3"
        chart-height="100"
      />
    </div>
    <!--end::Col-->
  </div>

</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import LayoutService from "@/core/services/LayoutService";
import MixedWidget12 from "@/components/widgets/mixed/Widget12.vue";
import { LS_CONFIG_NAME_KEY } from "@/stores/config";

export default defineComponent({
  name: "main-dashboard",
  components: {
    MixedWidget12,
  },
  setup() {
    onMounted(() => {
      if (!localStorage.getItem(LS_CONFIG_NAME_KEY)) {
        LayoutService.enableSidebar();
      }
    });

    onUnmounted(() => {
      if (!localStorage.getItem(LS_CONFIG_NAME_KEY)) {
        LayoutService.disableSidebar();
      }
    });
  },
});
</script>
