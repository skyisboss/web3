<script setup lang="ts">
import { ref, watch, onMounted } from "vue"

const props = defineProps(['toggle'])
const toggle = ref(props.toggle)

watch(() => props.toggle, n => toggle.value = n)
</script>

<template>
  <q-drawer
		bordered
    side="right"
		v-model="toggle"
		:width="$q.screen.width > 500 ? 360 : $q.screen.width"
		:breakpoint="500"
		:behavior="$q.screen.width > 500 ? 'desktop' : 'mobile'"
	>
    <!-- drawer content -->
  </q-drawer>
</template>

<style lang="scss" scoped>
</style>