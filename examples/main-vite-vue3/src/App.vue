<script setup lang="ts">
import { RouterView } from 'vue-router'

function push(subapp: string) {
  history.pushState(null, '', subapp)
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <li @click="push('/react16')">React16</li>
        <li @click="push('/react15')">React15</li>
        <li @click="push('/vue2')">Vue2</li>
        <li @click="push('/vue3')">Vue3</li>
        <li @click="push('/purehtml')">Purehtml</li>
      </nav>
    </div>

    <!-- vue3.0配置 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!-- vue3.0配置 -->
    <!-- <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view> -->
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  overflow: hidden;
  max-height: 30vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

header {
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

.logo {
  margin: 0 2rem 0 0;
}

header .wrapper {
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  place-items: flex-start;
  flex-wrap: wrap;
}

nav {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: -1rem;
  font-size: 2rem;

  padding: 1rem 0;
  margin-top: 1rem;
}
</style>
