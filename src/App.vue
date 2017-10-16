<template>
  <!-- Bootstrap的部分不用关注，只是基础样式 -->
  <div id="app">

    <!-- Bootstrap的部分不用关注，只是基础样式 -->
    <div class="navbar navbar-default navbar-static-top"></div>

    <div class="container"> <!-- 这里的ID是用来提供Vue操作的 -->
      <div class="row">
        <!-- 数组数据操作和动态显示，事件的监听和绑定等 -->
        <div class="col-md-8 col-md-offset-2">
          <div class="panel panel-default">
            <div class="panel-heading">通过Vue-Cli进行组件化开发</div>
            <div class="panel-body">
              <h4>My Todos {{todoCount}}</h4>
              <router-view/>
              <todos :todos="todos"></todos> <!-- 引用JS部分注册的组件；传入todos数据 -->
              <todo-form :todos="todos"></todo-form> <!-- 引用JS部分注册的组件；传入todos数据 -->
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Todos from './components/Todos' // 引用组件Todos
  import TodoForm from './components/TodoForm' // 引用组件TodoForm

  export default {
    name: 'app',
    data() { // 基础数据和变量
      return {
        todos: [
          {id: 1, title: '1. Learn VueJS', completed: true}, // completed在应用假设是一种状态，需要通过class样式来显示在页面上的
          {id: 2, title: '2. Coding', completed: false}
        ]
      }
    },
    computed: { // 页面中需要处理之后展示的数据，统一放这里
      todoCount() {
        return this.todos.length
      }
    },
    components: {
      Todos, TodoForm // 注册组件
    }
  }
</script>

<style></style>
