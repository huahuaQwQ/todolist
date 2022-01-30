<template>
  <li>
    <label >
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
      <span >{{ todo.inputValue }}</span>
    </label>
  </li>
</template>

<script>
export default {
  name: "todo",
  //接收todolist传出来的参数
  props: ["todo"],
  methods: {
    //勾选删除一个todo
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      // this.checkTodo(id)
      this.$bus.$emit("deleteTodo", id);
    },
  },
};
</script>

<style scpoed lang="less">
li {
  list-style: none;
  height: 30px;
  line-height: 30px;
  padding: 0 5px;
  background-color:  rgb(25, 202, 173);
  border: 1px solid rgb(0, 247, 82);
  margin: 5px 0;
}

li label {
  float: left;
  cursor: pointer;
}

input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
span{
  margin: 0 0 0 5px;
  font-size: 24px;
}
li:before {
  content: initial;
}
li:last-child {
  // border-bottom: none;
}
li:hover {
  background-color: rgb(35, 250, 214);
}
</style>