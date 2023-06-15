<script setup>
const props = defineProps({
  message: {
    type: String,
    default() {
      return ''
    }
  },
});

</script>

<template>
  <li class="message__item user">
    {{ props.message }}
  </li>
</template>
