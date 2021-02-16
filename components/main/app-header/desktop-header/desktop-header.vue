<template>
      <div class="desktop-header">
            <div class="logo">
                  <img src="statics/images/logo/logo3.svg" alt="Logo">
                  <p>گروه فنی مهندسی سازینو</p>
            </div>
            <div class="nav-items">
                  <ul>
                        <li @click="state = 'home'" :class="{'active' : state == 'home'}">صفحه اصلی</li>
                        <li @click="state = 'projects'" :class="{'active' : state == 'projects'}">پروژه ها</li>
                        <li @click="state = 'cooperate'" :class="{'active' : state == 'cooperate'}">همکاری با ما</li>
                        <li  @click="state = 'call'" :class="{'active' : state == 'call'}">تماس با ما</li>
                  </ul>
            </div>
            <div class="login">
                  <btn type="primary">عضویت</btn>
                  <span class="ml-20">|</span>
                  <btn type="main">
                        <span class="text--gray-500">ورود</span>
                  </btn>
            </div>
      </div>
</template>

<script>
      import Btn from "@/components/core/button/btn";

      export default {
            name: 'app-header',
            components: {
                  Btn
            },
            data(){
                  return {
                        state : 'home'
                  }
            }
      }
</script>

<style lang='scss'>
      @import 'desktop-header';
</style>