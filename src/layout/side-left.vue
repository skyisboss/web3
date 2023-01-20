<script setup lang="ts">
import { ref, watch } from 'vue'


const themes = ref({
  active: 'light',
  data: [
    {label: '白天', key: 'light', icon: 'light_mode'},
    {label: '夜晚', key: 'dark', icon: 'dark_mode'},
  ]
})
const setTheme = (value: string) => {
  const el = document.querySelector('body')
  if (el) {
    themes.value.active = value
    if (value == 'light') {
      el.classList.remove('body--dark')
      el.classList.add('body--light')
    } else {
      el.classList.remove('body--light')
      el.classList.add('body--dark')
    }
  }
}

const props = defineProps(['toggle'])
const toggle = ref(props.toggle)
watch(() => props.toggle, n => toggle.value = n)
</script>

<template>
	<q-drawer
		bordered
		v-model="toggle"
		:width="$q.screen.width > 500 ? 256 : $q.screen.width"
		:breakpoint="500"
		:behavior="$q.screen.width > 500 ? 'desktop' : 'mobile'"
    class="lt-side"
	>
		<q-scroll-area class="fit">
      <div class="q-pa-md">
        <div class="row" v-for="x in 3" :key="x">
          <div class="col" v-for="x in 3" :key="x">
            <q-btn flat text-color="black" label="福利" />
          </div>
        </div>
      </div>

      <q-separator/>
      
			<q-list padding class="menu-list">
				<q-item clickable v-ripple v-for="x in 3" :key="x">
					<q-item-section avatar>
						<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"
							/>
						</svg>
					</q-item-section>

					<q-item-section> Inbox </q-item-section>
				</q-item>
			</q-list>

      <div class="absolute full-width">
        <div class="q-pa-md q-gutter-y-md">
          <q-btn-group spread unelevated>
            <q-btn 
              v-for="theme in themes.data"
              :key="theme.key"
              :label="theme.label" 
              unelevated 
              :color="themes.active == theme.key ? 'secondary' : 'grey-3'" 
              :text-color="themes.active == theme.key ? 'primary' : 'default'" 
              :icon="theme.icon" 
              @click="setTheme(theme.key)"
            />
            <!-- <q-btn label="夜晚" unelevated color="grey-3" text-color="default" icon="dark_mode" @click="setTheme('dark')"/> -->
          </q-btn-group>
          <q-btn-dropdown spread unelevated color="grey-3" text-color="default" label="简体中文" class="full-width">
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>English</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Tiếng Việt</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          
        </div>
      </div>
		</q-scroll-area>
	</q-drawer>
</template>

<style lang="scss" scoped>
</style>
