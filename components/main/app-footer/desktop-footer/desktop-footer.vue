<template>
      <div class="footer">
            <section class="flex align-center font-90-p justify-between">
                  <div class="fast-access flex-grow-1">
                        <img src="/static/images/logo/logo3.svg" alt="Logo" />
                        <ul class="internal-links mt-10">
                              <li>
                                    صفحه اصلی
                                    <span class="mx-10">|</span>
                              </li>
                              <li>
                                    پروژه ها
                                    <span class="mx-10">|</span>
                              </li>
                              <li>
                                    همکاری با ما
                                    <span class="mx-10">|</span>
                              </li>
                              <li>تماس با ما</li>
                        </ul>
                  </div>
                  <div class="sazino-info flex-grow-1">
                        <p class="flex align-center mb-10">
                              <img
                                    class="full-width"
                                    src="/static/social_icons/telephone.svg"
                                    alt="telephone"
                              />
                              <span class="mr-5">09350672745</span>
                        </p>
                        <p class="flex align-center">
                              <img
                                    class="full-width"
                                    src="static/social_icons/email.svg"
                                    alt="email"
                              />
                              <span class="mr-5">sazinots@gmail.com</span>
                        </p>
                  </div>
                  <div class="about-sazino flex-grow-1">
                        <span class="font-110-p">درباره شرکت</span>
                        <p class="mt-10">گروه فنی مهندسی سازینو فعالیت خود را از سال 1399 با تمرکز بر طراحی و اجرای سازه های متنوع غشایی آغاز کرده است.</p>
                  </div>
            </section>
            <p
                  class="copyright font-80-p mt-10"
            >کلیه حقوق و امتیازات این وبسایت متعلق به شرکت سازینو می باشد.</p>
            <!--<carousel :delayOnEachSlide="4" :perPage="1" autoplay :rtl="true" loop>
                  <slide>
                        <h3>Product</h3>
                  </slide>
                  <slide>
                        <h3>Product</h3>
                  </slide>
                  <slide>
                        <h3>Product</h3>
                  </slide>
                  <slide>
                        <h3>Product</h3>
                  </slide>
                  <slide>
                        <h3>Product</h3>
                  </slide>
                  <slide>
                        <h3>Product</h3>
                  </slide>
                  <slide>
                        <h3>Product</h3>
                  </slide>
                  <slide>
                        <h3>Product</h3>
                  </slide>
                  <slide>
                        <h3>Product</h3>
                  </slide>
                  <slide>
                        <h3>Product</h3>
                  </slide>
            </carousel>-->
      </div>
</template>

<script>
//import { Carousel, Slide } from "vue-carousel";
export default {
      name: "desktop-footer",
      //components: { Carousel, Slide }
};
</script>

<style lang='scss'>
@import "desktop-footer";
</style>