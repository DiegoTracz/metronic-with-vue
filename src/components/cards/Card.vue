<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card body-->
    <div class="card-body p-0">
      <!--begin::Heading-->
      <div class="card-px py-8">
        <!--begin::Title-->
        <h2 class="fs-2x fw-bold mb-10">{{ title }}</h2>
        <!--end::Title-->

        <!--begin::Description-->
        <p class="text-gray-500 fs-5 fw-semibold mb-13">
          <span v-html="description"></span>
        </p>
        <!--end::Description-->
        <!--begin::Cadastro de nova imobiliário-->
        <h4 class="mb-4 text-gray-700">Cadastro de nova imobiliária</h4>
        <!--end::Cadastro de nova imobiliário-->

        <div class="row mb-10">
          <div class="col-4 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">CNPJ</label>
            <Field
              tabindex="1"
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="cnpj"
              placeholder="Digite o CNPJ"
              v-mask="'##.###.###/####-##'"
            />
          </div>

          <div class="col-4 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">Razão Social</label>
            <Field
              tabindex="2"
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="razaoSocial"
              placeholder="Digite a Razão Social"
            />
          </div>

          <div class="col-4 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">Nome Fantasia</label>
            <Field
              tabindex="3"
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="nomeFantasia"
              placeholder="Digite o nome Fantasia"
            />
          </div>
        </div>
        <div class="row mb-10">
          <div class="col-4 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">CRECI</label>
            <Field
              tabindex="4"
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="creci"
              placeholder="Digite o CRECI Jurídico"
              v-mask="'######'"
            />
          </div>
          <div class="col-8 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">Logotipo</label>
            <Field
              tabindex="5"
              class="form-control form-control-lg form-control-solid"
              type="file"
              name="logotipo"
            />
          </div>
        </div>

        <h4 class="mb-4 text-gray-700">Endereço</h4>
        <div class="row mb-10">
          <div class="col-4 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">CEP</label>
            <Field
              tabindex="6"
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="cep"
              placeholder="Digite o CEP da imobiliária"
              v-mask="'#####-###'"
              @blur="fetchAddress"
            />
          </div>
          <div class="col-4 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">Rua</label>
            <Field
              tabindex="7"
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="rua"
              placeholder="Digite a rua"
              v-model="address.rua"
            />
          </div>
          <div class="col-4 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">Número</label>
            <Field
              tabindex="8"
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="numero"
              placeholder="Digíte o número da imobiliaria"
            />
          </div>
        </div>
        <div class="row mb-10">
          <div class="col-4 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">Bairro</label>
            <Field
              tabindex="9"
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="bairro"
              placeholder="Digite o Bairro"
              v-model="address.bairro"
            />
          </div>
          <div class="col-4 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">Cidade</label>
            <Field
              tabindex="10"
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="cidade"
              placeholder="Digite a Cidade"
              v-model="address.cidade"
            />
          </div>
          <div class="col-4 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">Estado</label>
            <Field
              tabindex="11"
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="estado"
              placeholder="Digite o Estado"
              v-model="address.estado"
            />
          </div>
        </div>
        <div class="row mb-10">
          <div class="col-12 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">Complemento</label>
            <Field
              tabindex="12"
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="complemento"
              placeholder="Ex: Casa, apartamento, sobreloja, etc."
            />
          </div>
        </div>

        <!--begin::Usuário-->
        <h4  class="mb-4 text-gray-700">Usuário</h4>
        <div class="row mb-10">
          <div class="col-4 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">Nome Completo</label>
            <Field
              tabindex="13"
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="nomeCompleto"
              placeholder="Digite o nome completo do usuário"
            />
          </div>
          <div class="col-4 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">CPF</label>
            <Field
              tabindex="14"
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="cpf"
              placeholder="Digite o CPF do usuário"
              v-mask="'###.###.###-##'"
            />
          </div>
          <div class="col-4 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">Email</label>
            <Field
              tabindex="15"
              class="form-control form-control-lg form-control-solid"
              type="email"
              name="email"
              placeholder="Digite o nome completo do usuário"
            />
          </div>
        </div>
        <!--end::Usuário-->
        <!--begin::Contato-->
        <h4  class="mb-4 text-gray-700">Contato</h4>

        <div class="row mb-10">
          <div class="col-4 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">Email</label>
            <Field
              tabindex="15"
              class="form-control form-control-lg form-control-solid"
              type="email"
              name="email-contato"
              placeholder="Digite o email do responsável"
            />
          </div>
          <div class="col-4 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">Telefone</label>
            <Field
              tabindex="16"
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="telefone"
              placeholder="Telefone"
              v-mask="'(##) ####-####'"
            />
          </div>
          <div class="col-4 mb-3">
            <label class="form-label fs-6 fw-bold text-gray-700">WhatsApp</label>
            <Field
              tabindex="17"
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="whatsapp"
              placeholder="WhatsApp"
              v-mask="'(##) #####-####'"
            />
          </div>
        </div>
        <!--end::Contato-->

        <!--begin::Action-->
        <button
          type="button"
          class="btn btn-primary er fs-6 px-8 py-4 float-end mb-4"
          data-bs-toggle="modal"
          :data-bs-target="`#${modalId}`">
          {{ buttonText }}
        </button>
        <!--end::Action-->
      </div>
      <!--end::Illustration-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field } from "vee-validate";
import axios from "axios";

export default defineComponent({
  name: "modal-card",
  props: {
    title: String,
    description: String,
    buttonText: String,
    image: String,
    modalId: String,
  },
  components: {
    Field,
  },
  data() {
    return {
      address: {
        rua: "",
        bairro: "",
        cidade: "",
        estado: "",
      },
    };
  },
  methods: {
    async fetchAddress(event: Event) {
      const cep = (event.target as HTMLInputElement).value.replace(/\D/g, "");
      if (cep.length === 8) {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          if (response.data) {
            this.address.rua = response.data.logradouro;
            this.address.bairro = response.data.bairro;
            this.address.cidade = response.data.localidade;
            this.address.estado = response.data.uf;
          }
        } catch (error) {
          console.error("Error fetching address:", error);
        }
      }
    },
  },
});
</script>