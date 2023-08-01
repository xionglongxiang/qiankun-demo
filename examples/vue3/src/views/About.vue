<template>
  <div class="about-content">
    <h1>This is about page</h1>
    <div @click="handleclick">alert</div>
  </div>
</template>

<script>
export default {
  name: 'About',
  setup() {
    function handleclick() {
      alert(2)
    }
    return {
      handleclick
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-content {
  color: #7265e6;
}
</style>
