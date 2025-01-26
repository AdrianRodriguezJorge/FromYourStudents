import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';  // Para los estilos de Bootstrap
import 'bootstrap';  // Para los scripts de Bootstrap
// import 'bootstrap-icons/font/bootstrap-icons.css'; 

const app = createApp(App);
app.use(ElementPlus);
app.use(createPinia());
app.use(router);
app.mount('#app');