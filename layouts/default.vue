<template>
      <div>
            <component :is="`${device}Header`"></component>
                  <Nuxt />
            <component :is="`${device}Footer`"></component>
      </div>
</template>

<script>
export default {
      computed:{
            device(){
                  return this.isMobile()
            }
      },
      components: {
            mobileFooter: () => import("@/components/main/app-footer/mobile-footer/mobile-footer"),
            desktopFooter: () => import("@/components/main/app-footer/desktop-footer/desktop-footer"),
            mobileHeader: () => import("@/components/main/app-header/mobile-header/mobile-header"),
            desktopHeader: () =>import("@/components/main/app-header/desktop-header/desktop-header"),
      }
};
</script>

<style>
</style>
