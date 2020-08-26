<template>
  <div class="Done">
    <div class="title is-4 has-text-centered">
      List of Done Items
    </div>
    <div v-if="allDoneTodos.length">
      <done-item
        v-for="item in allDoneTodos"
        :key="item.id"
        :item="item"
        @remove="removeDoneItem"
        @restore="restore"
      />
    </div>
    <div v-else class="has-text-centered">
      No done items
    </div>
  </div>
</template>

<script>
import DoneItem from "@/components/DoneItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Done",
  components: { DoneItem },
  computed: {
    ...mapGetters(["allDoneTodos"])
  },
  mounted() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(["fetchTodos", "updateTodo", "deleteTodo"]),

    restore(item) {
      this.updateTodo({
        ...item,
        completed: !item.completed
      });
    },
    removeDoneItem(item) {
      this.deleteTodo(item.id);
    }
  }
};
</script>
