/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film' 
import Basket from '@/views/Basket' 
import Center from '@/views/Center' 
import City from '@/views/City' 
import Nowplaying from '@/views/Film/Nowplaying'
import Comingsoon from '@/views/Film/Comingsoon'
import Detail from'@/views/Detail'
import Login from '@/views/Film/Login'


Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    component: Film,
    children:[
      {
        path:"nowplaying",
        component: Nowplaying
      },
      {
        path:"comingsoon",
        component: Comingsoon
      },
      {
        path:"",
        redirect:"nowplaying"
      },
    ]
  },
  {
    path: '/basket',
    component: Basket
  },
  {
    path:"/detail/:id",
    name:"kerwindtail",
    component: Detail
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '*',
    redirect:'/film'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局守衛
// router.beforeEach((to, from, next) => {
//   // ...
//   //console.log(to)
//   if(to.path==="/center"){
//     console.log("盤查");
//     if(false){
//       next();
//     }
//     else{
//       next("/login");
//     }
//   }
//   else{
//     next();
//   }
// })

export default router
