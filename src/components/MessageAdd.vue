<script setup>
import {computed, ref} from "vue";
import { useStore } from "vuex";
import FormInput from "@/components/UI/FormInput.vue";

const store = useStore();
const message = ref('')

const isError = computed(() => {
  return store.getters['message/isError']
});

const addMassage = () => {
  store.commit('message/setMyMessages', { message: message.value, isMyMessage: true });
  message.value = '';
}
</script>

<template>
  <form class="chat__add-massage">
    <FormInput class="input" placeholder="Введите сообщение" v-model="message"/>
    <button v-focus class="btn" @click.prevent="addMassage" :disabled="isError">
      Отправить
    </button>
  </form>
</template>

<style scoped>

</style>
