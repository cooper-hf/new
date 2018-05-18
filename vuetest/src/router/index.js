import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import app1 from '@/components/app1'
import header from "@/components/common/header"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:"/app",
    	name:"app",
    	component:app1
    },
    {
      path:"/header",
      name:"header",
      component:header
    }
  ]
})
