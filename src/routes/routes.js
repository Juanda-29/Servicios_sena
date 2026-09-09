import Enfermeria from "../views/enfermeria.vue"
import Bienestar from "../views/bienestar.vue"
import Biblioteca from "../views/biblioteca.vue"
import Cafeteria from "../views/cafeteria.vue"
import Coordicion from "../views/coordinacion.vue"
import acerca from "../views/acerca.vue"
import { createRouter, createWebHashHistory, createMemoryHistory} from "vue-router"

const routes = [
    {path:"/", component:Enfermeria},
    {path:"/bienestar", component:Bienestar},
    {path:"/biblioteca", component:Biblioteca},
    {path:"/cafeteria", component:Cafeteria},
    {path:"/coordinacion", component:Coordicion},
    {path:"/acerca", component:acerca}

]

export const router = createRouter({
    routes,
    history:createWebHashHistory()
})

