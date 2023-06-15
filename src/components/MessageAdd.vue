<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import FormInput from "@/components/UI/FormInput.vue";

const store = useStore();
const message = ref('')

const addMassage = () => {
  store.commit('message/setMyMessages', { message: message.value, isMyMessage: true });
  message.value = '';
}
</script>

<template>
  <form class="chat__add-massage">
    <FormInput class="input" placeholder="Введите сообщение" v-model="message"/>
    <button v-focus class="btn" @click.prevent="addMassage">
      Отправить
    </button>
  </form>
</template>

<style scoped>

</style>
