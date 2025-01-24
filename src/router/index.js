import { createRouter, createWebHistory } from 'vue-router';
import AbdielThanxComponent from '../Components/AbdielThanxComponent.vue';
import Adriana from '../Components/Adriana.vue';
import LeyderComponent from '../Components/LeyderComponent.vue';
import Piedra from '../Components/Piedra.vue';
import Welcome from '../Components/Welcome.vue';
import MyThanks from '../Components/MyThanks.vue';

const routes = [
  { path: '/', component: AbdielThanxComponent },
  { path: '/abdiel', component: AbdielThanxComponent },
  { path: '/adriana', component: Adriana },
  { path: '/leyder', component: LeyderComponent },
  { path: '/piedra', component: Piedra },
  { path: '/my-thanks', component: MyThanks },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;