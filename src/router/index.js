// Composables
import { createRouter, createWebHistory } from 'vue-router'

import AccessTab from "@/components/AccessTab.vue"
import TeamTab from "@/components/TeamTab.vue"
import MigrateTab from "@/components/MigrateTab.vue"
import Home from "@/components/Home.vue"


const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: "",
        name: 'Home',
        redirect:"/access"
      },
      {
        path: "/access",
        component: AccessTab,
        name: 'Access'
      },
      {
        path: "/team",
        component: TeamTab,
        name: 'Team'
      },
      {
        path: "/migrate",
        component: MigrateTab,
        name: 'Migrate'
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
