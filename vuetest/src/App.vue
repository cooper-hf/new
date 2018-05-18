<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  created:function(){
    alert(1);
  }
}
</script>

<style>
#app {
  
}
*{
  margin: 0;
  padding: 0;
}
</style>
