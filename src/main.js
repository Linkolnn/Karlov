import '@styles/main.css';
import '@styles/components/header/header.css';
import '@styles/components/aside/aside.css';
import '@styles/components/footer/footer.css';
import '@styles/view/home.css';
import '@styles/view/quiz.css';
import '@styles/media.css';
import '@fonts/fonts.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
