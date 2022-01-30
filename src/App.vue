<template>
  <div id="app">
    <h1>Todolist</h1>
    <Headertodo @addTodo="addTodo" />
    <Todolist :todos="todos" v-show="show" />
    <!-- <Footertodo /> -->
  </div>
</template>

<script>
import Headertodo from "./components/Headertodo";
import Todolist from "./components/Todolist";
import Footertodo from "./components/Footertodo";

export default {
  name: "App",
  components: { Headertodo, Todolist, Footertodo },
  data() {
    return {
      // todos: JSON.parse(localStorage.getItem("todos") || []),
      todos: [],
      show: false,
    };
  },
  methods: {
    //添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
      this.show = true;
    },
    //勾选一个todo并删除todo
    deleteTodo(id) {
      this.todos = this.todos.filter((value) => value.id !== id);
      if (this.todos==0) {
        this.show = false;
      }
    },
  },
  mounted() {
    this.$bus.$on("deleteTodo", this.deleteTodo);
  },
};
</script>

<style scpoed lang="less">
#app {
  width: 800px;
  height: 600px;
  margin: 20px auto;
  background-color: rgb(121, 121, 18);
  text-align: center;
  font-size: 24px;
  color: rgb(255, 0, 0);
  border-radius: 10px ;
}
</style>