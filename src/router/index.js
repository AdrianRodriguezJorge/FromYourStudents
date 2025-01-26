import { createRouter, createWebHashHistory } from 'vue-router';
import AbdielThanxComponent from '../Components/AbdielThanxComponent.vue';
import Adriana from '../Components/Adriana.vue';
import LeyderComponent from '../Components/LeyderComponent.vue';
import Piedra from '../Components/Piedra.vue';
import Welcome from '../Components/Welcome.vue';
import Adrian from '../Components/Adrian.vue';

const routes = [
  { path: '/', component: Welcome },
  { path: '/abdiel', component: AbdielThanxComponent },
  { path: '/adriana', component: Adriana },
  { path: '/leyder', component: LeyderComponent },
  { path: '/piedra', component: Piedra },
  { path: '/adrian', component: Adrian },
];

const router = createRouter({
  history: createWebHashHistory(), 
  routes,
});

export default router;
