import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

createApp(App)
  .use(Quasar, {
    config: {
      brand: {
        primary: '#18a058', // #35c31e
        secondary: '#daf0e4',
        accent: '#9C27B0',
  
        dark: '#1d1d1d',
        'dark-page': '#121212',

        'default-black': '#333639',
  
        positive: '#35c31e',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037'
      }
    },
    plugins: {}, // import Quasar plugins and add here
  })
  .use(router)
  .use(createPinia())
  .mount('#app')
