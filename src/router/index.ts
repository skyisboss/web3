import { RouteRecordRaw, createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Layout from "@/layout/index.vue";
import Home from "@/views/home/index.vue";
import NotFound from "@/views/404/index.vue";

const routes: RouteRecordRaw[] = [
  {
		path: '/',
		name: 'Layout',
		component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
    ]
	},
	// {
	// 	path: '/bjl',
	// 	name: 'bjl',
	// 	component: () => import('../pages/game/Baccarat.vue'),
	// },
  {
		path: "/:pathMatch(.*)*",
		name: 'NotFound',
		component: NotFound,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(e) {
		window.scrollTo(0,0);
		if (e.path != '/') {}
	}
});

export default router