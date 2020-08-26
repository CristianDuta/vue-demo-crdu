<template>
  <div id="app">
    <div class="container">
      <div class="app-content">
        <the-nav class="has-text-centered" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TheNav from "./components/TheNav";

export default {
  components: { TheNav }
};
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  padding: 0 0.5rem;
}

.app-content {
  background: #ededed;
  padding: 0 1rem 1rem;
  border-radius: 5px;
  box-shadow: 0 0 30px -5px #2c3e50;
  margin: 1rem auto;
  min-height: 300px;
}
</style>
