// Base
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

// Templates

import DefaultLayout from "../layouts/DefaultLayout.vue";
import About from "../views/About.vue";
import Home from "../views/Home.vue";

export interface RouteMetaLayout {
	// biome-ignore lint/suspicious/noExplicitAny: using any for flexible layout typing
	layout?: any; // alternativ: defineComponent
}

// 1. Routen definieren mit TypeScript-Typisierung
const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			title: "Home",
			description: "Willkommen auf der Startseite",
			layout: DefaultLayout, // Optional, falls du Layouts verwendest
		},
	},
	{
		path: "",
		name: "Home",
		component: Home,
		meta: {
			title: "Home",
			description: "Willkommen auf der Startseite",
			layout: "DefaultLayout", // Optional, falls du Layouts verwendest
		},
	},
	{
		path: "/about",
		name: "About",
		component: About,
		meta: {
			title: "Über uns",
			description: "Erfahren Sie mehr über uns",
			layout: DefaultLayout, // Optional, falls du Layouts verwendest
		},
	},
	// {
	// 	// Catch-all Route für 404
	// 	path: "/:pathMatch(.*)*",
	// 	name: "NotFound",
	// 	component: () => import("../views/NotFound.vue"),
	// },
];

// 2. Router-Instanz erstellen
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
