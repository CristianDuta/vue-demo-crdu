<template>
  <div class="TheNav">
    <router-link :to="{ name: 'todo-list' }">
      Todo List
    </router-link>
    |
    <router-link :to="{ name: 'done-list' }">
      Done List
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TheNav"
};
</script>

<style lang="scss" scoped>
.TheNav {
  padding: 1.5rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
