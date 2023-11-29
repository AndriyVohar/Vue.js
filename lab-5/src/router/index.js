import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue']
import HomePage from '@/components/HomePage.vue'
import LessonPage from '@/components/LessonPage.vue'
import LessonView from '@/views/LessonView.vue'
import store from '@/store'
const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/lesson',
    name: 'lesson',
    component: LessonView,
    // meta: {requiresAuth: true},  
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    children:[
      {
        path: '/lesson/select',
        name: 'lesson/select',
        component: LessonPage,
        meta: {requiresAuth: true},
      },
      {
        path: ':id(\\d*)+',
        name: 'lesson/teachers',
        component: ()=>import('@/components/TeacherPage.vue'),
        meta: {requiresAuth: true},
        beforeEnter(to){
          const lessons = store.state.lessons.filter((lesson)=>lesson.id==to.params.id)
          if(!lessons) return {name: 'NotFound'}
        }
      },
      {
        path: ':segment+',
        name: 'lesson/plan',
        component: ()=>import('@/components/PlanPage.vue'),
      }
    ]
  },
  {
    path: '/not-found',
    name: 'NotFound',
    component: ()=> import('@/components/NotFoundPage.vue'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: ()=>import('@/components/AuthPage.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to)=>{
  const isAuthenticated = window.username
  if(to.meta.requiresAuth&&!isAuthenticated){
    return{
      path: '/auth',
      query: {redirect:to.fullPath},
    }
  }
})

export default router
