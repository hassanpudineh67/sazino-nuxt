<template>
      <div class="home">
            <!--<connection></connection>-->
            <div class="intro">
                  <div ref="sazino_title" class="sazino-title">
                        <p ref="title" class="bold-title">گروه فنی مهندسی سازینو</p>
                        <p ref="des" class="mt-10">طراح و مجری سازه های غشایی و چادری</p>
                  </div>
                  <ImageItem
                  class="article-item__image"
                  :source="require('/static/images/intro/intro.jpg')"
                  />
            </div>
            <div class="divider-grad-mask"></div>

            <div class="samples">
                  <p class="tensile-des">
                        <span class="font-bold">
                              سازه
                              های
                              غشایی
                        </span> که <span>سازه های چادری</span> یا <span>پارچه ای</span> نیز نامیده می شوند، زیر مجموعه ای از سازه
                        های فضایی هستند و به دلیل سبکی، شفافیت
                        و انعطاف در خلق فرم های زیبا و بدیع،
                        گسترش روز افزونی در ساخت بناهایی با
                        عملکرد های مختلف تجاری، اداری، ورزشی
                        و... یا به شکل سایه بان در فضاهای عمومی
                        و شهری داشته اند. در ادامه نمونه هایی از
                        کاربردهای سازه غشایی آورده شده است.
                  </p>
                  <Card
                        :title="card.title"
                        :description="card.description"
                        :img_src="card.img_src"
                        v-for="(card, i) in card_data"
                        :key="`card_info-${i}`"
                  />
            </div>
      </div>
</template>

<script>
import Card from "@/components/core/card/card";
import Connection from "@/components/connections/connection";
import ImageItem from "@/components/core/ImageItem/ImageItem";

export default {
      name: "home",
      components: { Connection, Card, ImageItem },
      data() {
            return {
                  card_data: [
                        {
                              img_src: "1.jpg",
                              title: "عنوان ساختگی",
                              description:
                                    "متن ساختگیتن ساختگیتن ساختگیتن ساختگیتن ساختگیتن ساختگیتن ساختگیتن ساختگیتن ساختگی تن ساختگی تن ساختگی تن ساختگی",
                        },
                        {
                              img_src: "2.jpg",
                              title: "عنوان ساختگی",
                              description:
                                    "متن ساختگیتن ساختگیتن ساختگیتن ساختگیتن ساختگیتن ساختگیتن ساختگیتن ساختگیتن ساختگی تن ساختگی تن ساختگی تن ساختگی",
                        },
                        {
                              img_src: "3.jpg",
                              title: "عنوان ساختگی",
                              description:
                                    "متن ساختگیتن ساختگیتن ساختگیتن ساختگیتن ساختگیتن ساختگیتن ساختگیتن ساختگیتن ساختگی تن ساختگی تن ساختگی تن ساختگی",
                        },
                  ],
            };
      }
};
</script>

<style lang='scss'>
@import "home";
</style>