<template>
  <KTModalCard
    title="Cadastro de cliente"
    :image="getIllustrationsPath('2.png')"
    button-text="Salvar e Continuar"
    modal-id="kt_modal_add_customer"
  ></KTModalCard>

  <AddCustomerModal></AddCustomerModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import AddCustomerModal from "@/components/modals/forms/AddCustomerModal.vue";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "getting-started",
  components: {
    KTModalCard,
    AddCustomerModal,
  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
