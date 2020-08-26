<template>
  <div class="BaseTodoItem">
    <div class="BaseTodoItem__checkbox">
      <slot name="checkbox">
        <input type="checkbox" disabled :checked="!!item.completed" />
      </slot>
    </div>
    <div
      class="BaseTodoItem__title"
      :class="{ 'BaseTodoItem--completed': item.completed }"
    >
      <slot name="title">
        {{ item.title }}
      </slot>
    </div>
    <div class="BaseTodoItem__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseTodoItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.BaseTodoItem {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background: #fff;
  padding: 0.5rem;
  border-radius: 5px;

  &--completed {
    text-decoration: line-through;
    opacity: 0.5;
  }

  &__title {
    flex: 1 1 auto;
    padding: 0 1rem;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
