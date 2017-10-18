<template>
  <div id="todos">  <!-- 这里的ID是用来声明template的 -->
    <h4>My Todos {{todoCount}}</h4>
    <!-- 将显示数组数据部分组件化： -->
    <ul class="list-group">
      <!-- 通过v-bind来根据数据的不同设置class样式；把index输出，是为了提供删除使用 -->
      <li class="list-group-item"
          v-bind:class="{ 'completed' : todo.completed}"
          v-for="(todo,index) in todos">
        <router-link :to="{ name: 'todo', params: { id: todo.id }}">{{todo.title}}</router-link>
        <button class="btn btn-success btn-xs pull-right"
                v-bind:class="[todo.completed ? 'btn-danger' : 'btn-success']"
                v-on:click="completedTodo(todo)">
          {{ todo.completed ? 'undo' : 'done' }}
        </button>
        <button class="btn btn-warning btn-xs pull-right" v-on:click="delTodo(index)">Delete</button>
      </li>
    </ul>
    <todo-form :todos="todos"></todo-form> <!-- 引入子组件 -->
  </div>
</template>

<script>
  import TodoForm from './TodoForm' // 引入子组件

  export default {
    name: 'Todos',
    props: ['todos'], // 引入到组件中的数据/变量
    computed: { // 页面中需要处理之后展示的数据，统一放这里
      todoCount() {
        return this.todos.length
      }
    },
    methods: { // 逻辑方法
      delTodo(index) {
        this.todos.splice(index, 1)
      },
      completedTodo(todo){
        todo.completed = !todo.completed
      }
    },
    components: { // 引入子组件
      TodoForm
    }
  }
</script>

<style>
  .completed {
    color: #00a379;
    text-decoration: line-through;
  }
</style>
