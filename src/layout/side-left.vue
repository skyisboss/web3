<script setup lang="ts">
import { ref, watch } from 'vue'

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
            <q-btn label="白天" unelevated color="secondary" text-color="primary" icon="light_mode" />
            <q-btn label="夜晚" unelevated color="grey-3" text-color="default" icon="dark_mode" />
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

<style lang="scss" scoped></style>
