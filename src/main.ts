import { createApp } from 'vue'
import axiosService from './services/axiosService.ts'
import './style.css'
import App from './App.vue'

axiosService()
createApp(App).mount('#app')
