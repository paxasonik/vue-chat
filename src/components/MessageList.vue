<script setup>
import { computed } from "vue";
import { useStore } from "vuex"
import MessageItem from "@/components/MessageItem.vue";

const store = useStore();

const messages = computed(() => {
  return store.getters['message/messages']
});
</script>

<template>
  <transition-group tag="ul" name="messages" class="chat__messages message" v-if="messages.length">
    <message-item
        v-for="item in messages"
        :key="item.message"
        :item="item"
    />
  </transition-group>
  <div class="chat__empty" v-else>
    Чат пуст
  </div>
</template>
