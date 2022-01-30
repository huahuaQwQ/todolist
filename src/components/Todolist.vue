<template>
  <ul class="todolist-Box">
    <Todo v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
  </ul>
</template>

<script>
import Todo from "./Todo";
export default {
  name: "todolist",
  components: { Todo },
  props: ["todos"],
  
};
</script>

<style scpoed lang="less">
.todolist-Box {
  width: 600px;
  border: 1px solid #ddd;
  border-radius: 2px;
  margin: 0 auto;
  padding: 5px;
}
</style>