import Vue from 'vue'
import Router from 'vue-router'
import Todos from '@/components/Todos'
import TodoForm from '@/components/TodoForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/TodoForm',
      name: 'TodoForm',
      component: TodoForm
    }
  ]
})
