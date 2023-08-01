<template>
  <div class="hello-content">
    <h1>{{ msg }}</h1>
    <p>Vue version: {{ version }}</p>
  </div>
</template>

<script>
import { onBeforeUpdate, onMounted, version } from "vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data() {
    return {
      nameColor: "orange",
    };
  },

  setup() {
    onMounted(() => {
      // console.log("mounted");
    });

    onBeforeUpdate(() => {
      // console.log("beforeUpdate");
    });

    return {
      version,
    };
  },
};
</script>

<style>
.name {
  color: v-bind(nameColor);
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
  list-style-type: none;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1 {
  color: #64b587;
}
</style>
