<template>
  <div class="currency-input">
<!--    <input-->
<!--        :value="props.value"-->
<!--        type="text"-->
<!--        @input="onInput"-->
<!--    >-->
    <div class="currency-input__divider"></div>
    <select
        id="currency"
        :value="props.currency"
        name="currency"
        @change="onSelect"
    >
<!--      <option-->
<!--          v-for="option in options"-->
<!--          :key="option.id"-->
<!--          :value="option.short_code"-->
<!--      >{{ option.name }}</option>-->
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: [Number, String],
    default: 0
  },
  currency: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['update:value', 'update:currency', 'onUpdate'])

// const onInput = (event: InputEvent) => {
  // const target = event.target as HTMLInputElement
  // const value = target.value.replace(/\D/g, '')
  // event.target.value = value
  // emit('update:value', value)
  // emit('onUpdate')
// }
const onSelect = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:currency', target.value)
  emit('onUpdate')
}
</script>

<style scoped>
.currency-input {
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: .3rem;
}
.currency-input input,
.currency-input select {
  width: 50%;
  height: 100%;
  padding: 0 1rem;
  border: none;
  background: transparent;
  outline: none;
  color: var(--foreground);
  font-size: 1rem;
}
.currency-input__divider {
  height: calc(100% - 1rem);
  width: 1px;
  background: var(--foreground);

}
</style>
