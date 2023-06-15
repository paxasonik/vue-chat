<script setup>
import { Emit } from "@/utils/constants";


const props = defineProps({
  modelValue: {
    type: String,
    default() {
      return ''
    }
  },
});

const emit = defineEmits([Emit.UPDATE_VALUE]);

const updateInput = (event) =>  {
  emit(Emit.UPDATE_VALUE, event.target.value)
}
</script>

<template>
  <input type="text" :value="props.modelValue" @input="updateInput">
</template>
