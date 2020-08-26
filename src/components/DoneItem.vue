<template>
  <base-todo-item :item="item">
    <template #actions>
      <div class="buttons">
        <button
          class="button is-small is-inverted is-primary"
          @click="$emit('restore', item)"
        >
          <span class="icon">
            <span class="fa fa-history fa-lg" />
          </span>
        </button>
        <button
          class="button is-small is-inverted is-danger"
          @click="$emit('remove', item)"
        >
          <span class="icon">
            <span class="fa fa-trash fa-lg" />
          </span>
        </button>
      </div>
    </template>
  </base-todo-item>
</template>

<script>
import BaseTodoItem from "@/components/BaseTodoItem";

export default {
  name: "DoneItem",
  components: { BaseTodoItem },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.buttons {
  flex-wrap: nowrap;
}
</style>
