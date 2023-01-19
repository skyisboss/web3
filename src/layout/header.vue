<template>
  <q-header height-hint="56">
    <q-toolbar class="q-px-md q-gutter-x-md" style="min-height: 56px">
      <q-btn flat round dense icon="menu" @click="emit('toggleMenu')"/>
      <a href="/" style="height: 34px">
        <img src="@/assets/logo.svg" alt="logo" />
      </a>
      <q-toolbar-title class="q-gutter-x-md">
        <q-btn-group rounded unelevated dense>
          <q-btn class="my-btn" icon="sports_esports" unelevated color="secondary" text-color="primary" rounded label="游戏" />
          <q-btn class="my-btn" icon="sports_basketball" unelevated color="grey-3" text-color="#333639" rounded label="体育" />
        </q-btn-group>
        <q-btn class="my-btn" flat dense rounded text-color="default" label="优惠" icon="verified" />
        <q-btn class="my-btn" flat dense rounded text-color="default" label="公告" icon="campaign" />
      </q-toolbar-title>
      <q-space />
      <q-btn flat>
        <span class="text-positive">注册</span>
      </q-btn>
      <q-btn class="my-btn" color="primary" text-color="white" label="登录" unelevated />
      <q-btn icon="question_answer" unelevated square dense @click="emit('toggleChat')">
        <q-badge color="positive" floating>22</q-badge>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ref } from "vue"

const emit = defineEmits(['toggleMenu', 'toggleChat'])

</script>

<style lang="scss" scoped>
.q-header {
  background-color: var(--header-color);
  backdrop-filter: blur(20px);
  box-shadow: var(--header-shadow);
  color: var(--header-text-color);
}
.q-badge {
  right: -8px;
  top: -8px;
  border-radius: 1em;
  border: 2px solid #fff;
}
</style>