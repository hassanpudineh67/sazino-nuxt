<template>
      <div class="card">
            <!--<img class="img" :src="require(`@/statics/images/intro/${img_src}`)" alt="intro">-->
            <ImageItem
                  class="article-item__image"
                  :source="require(`@/statics/images/intro/${img_src}`)"
                  />
            <span class="title">{{title}}</span>
            <p class="description">{{description}}</p>
      </div>
</template>

<script>
import ImageItem from '@/components/core/ImageItem/ImageItem';
      export default {
            components: {
                  ImageItem
            },
            props: {
                  title: {
                        type: String
                  },
                  description: {
                        type: String
                  },
                  img_src : {
                        type: String
                  }
            },
            name: 'card'
      }
</script>

<style lang='scss'>
@import 'card';
</style>