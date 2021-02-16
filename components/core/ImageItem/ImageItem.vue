<template>
      <figure v-lazyload class="image__wrapper">
            <ImageSpinner class="image__spinner" />
            <img class="image__item" :data-url="source" alt="random image" />
      </figure>
</template>
<script>
import ImageSpinner from "@/components/core/ImageSpinner/ImageSpinner";

export default {
      name: "ImageItem",
      components: {
            ImageSpinner,
      },
      props: {
            source: {
                  type: String,
                  required: true,
            },
      },
};
</script>

<style lang="scss">
@import "ImageItem";
</style>