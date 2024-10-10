<template>
  <Loader v-if="isLoading"/>
  <Card v-else class="currency-calculator">
    <div v-if="errorMessage" class="currency-calculator__error">{{ errorMessage }}</div>
    <div v-else class="currency-calculator__form">
      <div class="currency-calculator__title">{{ fromTitle }} {{ toTitle }}</div>
      <CurrencyInput
          v-model:value="currencyFrom.value"
          v-model:currency="currencyFrom.currency"
          :options="currencyList"
          @onUpdate="calculateCurrencies"
      />
      <CurrencyInput
          v-model:value="currencyTo.value"
          v-model:currency="currencyTo.currency"
          :options="currencyList"
          @onUpdate="calculateCurrencies"
      />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import CurrencyApi from './api/CurrencyApi.ts'
import Card from '../../UI/Card.vue'
import CurrencyInput from './components/CurrencyInput.vue'
import Loader from '../../UI/Loader.vue'

const isLoading = ref(true)
const errorMessage = ref('')
const currencyList = ref([])

const currencyFrom = reactive({ value: 1, currency: 'USD' })
const currencyTo = reactive({ value: 1, currency: 'PLN' })

onMounted(async () => {
  try {
    isLoading.value = true
    currencyList.value = await CurrencyApi.read()
    await calculateCurrencies()
  } catch (error) {
    errorMessage.value = error.response.data.meta.error_detail
    throw error
  } finally {
    isLoading.value = false
  }
})

const getCurrencyName = (short_code) => currencyList.value.find(currency => currency?.short_code === short_code)?.name
const fromTitle = computed(() => `${currencyFrom.value} ${ getCurrencyName(currencyFrom.currency) } equal`)
const toTitle = computed(() => `${currencyTo.value} ${ getCurrencyName(currencyTo.currency) }`)

const calculateCurrencies = async () => {
  try {
    const convertData = await CurrencyApi.convert({
      from: currencyFrom.currency,
      to: currencyTo.currency,
      amount: currencyFrom.value
    })
    currencyTo.value = convertData.value
  } catch (error) {
    throw error
  }
}
</script>

<style scoped>
.currency-calculator {
  max-width: 30rem;
  padding: 1rem;
}
.currency-calculator__form {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
.currency-calculator__error {
  font-size: 1rem;
  font-weight: 500;
  color: var(--error-color);
  text-align: center;
}
.currency-calculator__title {
  font-size: 1rem;
  font-weight: 400;
  color: var(--foreground);
}
</style>
