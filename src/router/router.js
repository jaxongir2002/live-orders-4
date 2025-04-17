import {createRouter, createWebHistory} from "vue-router";
import Kitchen from "../view/Kitchen.vue";
import LiveOrdersView from "../view/LiveOrdersView.vue";

const routers = [
    {
        name: "kitchen",
        path: "/kitchen",
        component: Kitchen
    },
    {
        name: "live-orders",
        path: "/",
        component: LiveOrdersView
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routers,
    strict: true, // applies to all routes
})
export default router