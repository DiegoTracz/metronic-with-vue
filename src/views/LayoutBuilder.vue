<template>
  <!--begin::Layout Builder Notice-->
  <div class="card mb-10">
  </div>
  <!--end::Layout Builder Notice-->

</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import { config } from "@/layouts/default-layout/config/helper";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { themeName } from "@/core/helpers/system";
import { LS_CONFIG_NAME_KEY } from "@/stores/config";

const LS_BUILDER_TAB_NAME =
  "layoutBuilderTabIndex_" + import.meta.env.VITE_APP_DEMO;

export default defineComponent({
  name: "layout-builder",
  components: {
    CodeHighlighter,
  },
  setup() {
    const tabIndex = ref(0);

    onMounted(() => {
      // set the tab from previous
      tabIndex.value = parseInt(
        localStorage.getItem(LS_BUILDER_TAB_NAME) || "0"
      );
    });

    /**
     * Reset config
     * @param event
     */
    const reset = (event: any) => {
      event.preventDefault();
      // remove existing saved config
      localStorage.removeItem(LS_CONFIG_NAME_KEY);
      window.location.reload();
    };

    /**
     * Set active tab when the tab get clicked
     * @param event
     */
    const setActiveTab = (event: any) => {
      tabIndex.value = parseInt(event.target.getAttribute("data-tab-index"));
      // keep active tab
      localStorage.setItem(LS_BUILDER_TAB_NAME, tabIndex.value.toString());
    };

    /**
     * Submit form
     * @param event
     */
    const submit = (event: any) => {
      event.preventDefault();
      // save new config to localStorage
      localStorage.setItem(LS_CONFIG_NAME_KEY, JSON.stringify(config.value));
      window.location.reload();
    };

    return {
      tabIndex,
      config,
      reset,
      setActiveTab,
      submit,
      themeName,
      getAssetPath,
    };
  },
});
</script>