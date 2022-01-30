<template>
  <div >
    <Headertodo />
    <Todolist />
    <Footertodo />
  </div>
</template>

<script>
import Headertodo from "./components/Headertodo";
import Todolist from "./components/Todolist";
import Footertodo from "./components/Footertodo";

export default {
  name: "App",
  components: {
    Headertodo,
    Todolist,
    Footertodo,
  },
};
</script>

<style scpoed lang="less">

</style>
