import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreateView from '../views/CreateView';
import EditView from '../views/EditView';
import ProfesoresView from '../views/ProfesoresView';
import MateriasView from '../views/MateriasView';
import CrearMateriaView from '../views/CrearMateriaView';
import CrearProfesorView from '../views/CrearProfesorView';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',

    component: CreateView
  },
  {
    path: '/edit/:id',
    name: 'edit',

    component: EditView
  },
  {
    path: '/crearmateria',
    name: 'crearmateria',

    component: CrearMateriaView
  },
  {
    path: '/crearprofesor',
    name: 'crearprofesor',

    component: CrearProfesorView
  },
  {
    path: '/profesores',
    name: 'profesores',

    component: ProfesoresView
  },
  
  {
    path: '/materias',
    name: 'materias',

    component: MateriasView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
