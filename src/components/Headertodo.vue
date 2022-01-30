<template>
  <div class="inputBox">
    <input
      class="inputB"
      type="text"
      placeholder="todo..."
      @keyup.enter="CreateTodo"
      v-model="inputValue"
    />
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: "headertodo",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    //创建todo
    CreateTodo(e) {
      if(!this.inputValue.trim()) {
          return alert('输入不能为空！');
      }
      if (e.key == "Enter") {
        const todoObj = {id:nanoid(),inputValue:this.inputValue,done:false};
        // console.log(e);
        // console.log(this.inputValue === e.target.value);
        //$emit(事件名，参数1，参数2，...)
        //通知app组件去添加一个todo对象
        this.$emit('addTodo',todoObj)
        console.log(this);
        this.inputValue = '';
      }
    },
  },
};
</script>

<style scpoed lang="less">
.inputBOX {
}
.inputB {
  width: 600px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}
.inputB:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>