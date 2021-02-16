<template>
      <button :class="type" :disabled="disabled" @click="callback($event)">
            <slot></slot>
      </button>
</template>

<script>
export default {
      name: "container",
      props: {
            type: String,
            disabled: Boolean,
      },
      methods: {
            callback: function (e) {
                  this.$emit("click", e);
            },
      },
};
</script>

<style lang="scss">
      @import 'btn';
</style>