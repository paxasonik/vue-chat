<script setup>
import { computed, onBeforeMount } from "vue";
import { useStore } from "vuex"
import MessageList from "@/components/MessageList.vue";
import Preloader from "@/components/UI/Preloader.vue";
import MessageAdd from "@/components/MessageAdd.vue";

const store = useStore();

const isMessagesLoading = computed(() => {
  return store.getters['message/isMessagesLoading']
});
const isError = computed(() => {
  return store.getters['message/isError']
});
const isMessages = computed(() => {
  return store.getters['message/isMessages']
});

const loadMoreMessages = () => {
  store.dispatch('message/loadMoreMessages')
}

onBeforeMount(() => {
  store.dispatch('message/fetchMessages')
})
</script>

<template>
  <div class="container content__chat chat">
    <div class="chat__wrap">
      <message-list v-if="isMessagesLoading"/>
      <preloader v-else/>
      <div v-intersection="loadMoreMessages" class="observer" v-show="isMessagesLoading && isMessages"/>
      <transition name="error">
        <div class="chat__error" v-if="!isMessages">
          Больше нет сообщений
        </div>
      </transition>
      <transition name="error">
        <div class="chat__error" v-if="!isError">
          Извините, возникла ошибка. Попробуйте ещё раз.
        </div>
      </transition>
    </div>
    <message-add/>
  </div>
</template>
