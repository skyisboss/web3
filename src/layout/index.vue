<script setup lang="ts" name="layout">
import { ref } from 'vue'
import Header from "./header.vue";
import SideLeft from "./side-left.vue";
import SideRight from "./side-right.vue";
import Footer from "./footer.vue";

const toggleMenu = ref(true)
const toggleChat = ref(false)

const handleMenu = () => toggleMenu.value = !toggleMenu.value
const handleChat = () => toggleChat.value = !toggleChat.value
</script>
  
<template>
  <div class="layout">
    
    <q-layout view="hHr LpR lfr" class="rounded-borders">
      <Header @toggleMenu="handleMenu" @toggleChat="handleChat"/>
      <side-left :toggle="toggleMenu" />
      <side-right :toggle="toggleChat" />

      <q-page-container>
        <router-view />
      </q-page-container>

      <Footer />
    </q-layout>
  </div>
</template>

<style lang="scss">
html, body {
  color: #333639;
  line-height: 1.5;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.body--light {
  --header-color: #ffffffb8;
  --header-text-color: #333639;
  --header-shadow: inset 0px -1px 1px #e7ebf0;

  --body-color: #eff4ff;

  --footer-color: #ffffff;
  --footer-text-color: #557086;
  --footer-text-paimary-color: #2c3e50;
}
.page-content {
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}
.layout {
  height: 100%;
  background-color: var(--body-color);
}
.my-btn.q-btn {
  min-height: 34px;
  padding: 0 18px;
  line-height: 1;
}
</style>
  