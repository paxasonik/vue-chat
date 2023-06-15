<script setup>
import { computed, onBeforeMount } from "vue";
import { useStore } from "vuex"
import MessageList from "@/components/MessageList.vue";
import Preloader from "@/components/UI/Preloader.vue";

const store = useStore();

const isMessagesLoading = computed(() => {
  return store.getters['message/isMessagesLoading']
});
const isError = computed(() => {
  return store.getters['message/isError']
});

const loadMoreMessages = () => {
  store.dispatch('message/loadMoreMessages')
}

onBeforeMount(() => {
  store.dispatch('message/fetchMessages')
})
</script>

<template>
  <div class="container content__chat chat" v-if="isError">
    <div class="chat__wrap">
      <message-list v-if="isMessagesLoading"/>
      <preloader v-else/>
      <div v-intersection="loadMoreMessages" class="observer" v-show="isMessagesLoading"/>
    </div>
    <div class="chat__add-massage">
      <input class="input" type="text" placeholder="Введите сообщение">
      <button class="btn">
        Отправить
      </button>
    </div>
  </div>
  <div class="container content__error" v-else>
    Извините, возникла ошибка. Перезагрузите пожалуйста страницу.
  </div>
</template>
