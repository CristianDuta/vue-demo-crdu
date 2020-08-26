<template>
  <div class="ToDo">
    <div class="title is-4 has-text-centered">
      TODOs
    </div>
    <div class="ToDo__addNew">
      <input
        v-model.trim="newTodoTitle"
        class="input"
        type="text"
        name="new_todo"
        placeholder="Your new TODO"
        @keyup.enter.prevent="addNewTodo"
      />
    </div>
    <div class="ToDo__items">
      <todo-item
        v-for="item in allUndoneTodos"
        :key="item.id"
        :item="item"
        @change="handleItemChange"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TodoItem from "@/components/TodoItem";

export default {
  name: "ToDo",
  components: { TodoItem },
  data() {
    return {
      newTodoTitle: "",
      todoItems: []
    };
  },
  computed: {
    ...mapGetters(["allUndoneTodos"])
  },
  mounted() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(["fetchTodos", "updateTodo", "addTodo"]),
    addNewTodo() {
      if (!this.newTodoTitle) {
        return;
      }
      this.addTodo(this.newTodoTitle);
      this.newTodoTitle = "";
    },
    handleItemChange(item) {
      this.updateTodo(item);
    }
  }
};
</script>
<style lang="scss" scoped>
.ToDo {
  &__items {
    margin-top: 1.5rem;
  }
}
</style>
