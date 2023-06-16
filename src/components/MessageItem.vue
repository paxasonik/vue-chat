<script setup>
import { computed } from "vue";

const props = defineProps({
  item: {
    type: Object,
    default() {
      return {
        message: '',
        isMyMessage: false,
      }
    }
  },
});

const classMessages = computed(() => {
  return props.item.isMyMessage ? 'my' : 'user'
});
</script>

<template>
  <li class="message__item" :class="[classMessages]">
    {{ props.item.message }}
  </li>
</template>
