<template>
  <base-todo-item class="TodoItem" :item="item">
    <template #checkbox>
      <input v-model="completedLocal" type="checkbox" class="checkbox" />
    </template>
  </base-todo-item>
</template>

<script>
import BaseTodoItem from "@/components/BaseTodoItem";

export default {
  name: "TodoItem",
  components: { BaseTodoItem },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    completedLocal: {
      get() {
        return !!this.item.completed;
      },
      set(value) {
        this.emitChange({
          completed: !!value
        });
      }
    }
  },
  methods: {
    emitChange(updatedItem) {
      this.$emit("change", {
        ...this.item,
        ...updatedItem
      });
    }
  }
};
</script>
