<template>
  <q-footer>
    <div class="page-content">
      <div class="flex justify-between mt-5">
        <div v-for="item in menus" :key="item.name">
          <h3>{{ item.title }}</h3>
          <ul class="mt-2 space-y-2">
            <li v-for="(data, index) in item.data" :key="index">{{ data.title }}</li>
          </ul>
        </div>
        <div class="min-w-[300px]">
          <h3>需要帮助任何帮助？从这里联系我们</h3>
          <q-card flat class="bg-grey-1 min-h-[80px]">
            <q-card-section>
              Telegram WhatsApp Facebook Twitter
            </q-card-section>
          </q-card>
          <div class="mt-4 text-right-">Copyright © 2022 TopHash</div>
        </div>
      </div>

      <q-separator class="q-my-md"/>

      <div class="aboutme mb-10">
        <h5 class="text-center q-mt-lg q-mb-md">致力于打造最公平的在线娱乐</h5>
        <div>
          顶级哈希是一个基于区块链和加密货币的在线游戏，致力于为玩家提供最好的区块链游戏！顶级哈希是一个基于区块链和加密货币的在线游戏，致力于为玩家提供最好的区块链游戏！顶级哈希是一个基于区块链和加密货币的在线游戏，致力于为玩家提供最好的区块链游戏！顶级哈希是一个基于区块链和加密货币的在线游戏，致力于为玩家提供最好的区块链游戏！致力于为玩家提供最好的区块链游戏！致力于为玩家提供最好的区块链游戏！顶级哈希是一个基于区块链和加密货币的在线游戏，致力于为玩家提供最好的区块链游戏！
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script setup lang="ts">
import {  } from "vue"
const menus = [
  {name: 'game', title: '游戏', data: [
    {title: '老虎机'},
    {title: '棋牌'},
    {title: '百家乐'},
    {title: '区块链'},
  ]},
  {name: 'sport', title: '体育', data: [
    {title: '热门赛事'},
    {title: '足球'},
    {title: '篮球'},
    {title: '竞技'},
  ]},
  {name: 'promo', title: '活动', data: [
    {title: 'VIP俱乐部'},
    {title: '代理加盟'},
    {title: '股东招募'},
    {title: '首存礼金'},
  ]},
  {name: 'about', title: '关于我们', data: [
    {title: '隐私政策'},
    {title: '服务条款'},
    {title: '常见问题'},
    {title: '联系我们'},
  ]},
]
</script>

<style lang="scss" scoped>
.q-footer {
  background-color: var(--footer-color);
  color: var(--footer-text-color);
} 

</style>

<style>
.body--dark .q-footer .bg-grey-1{
  color: #788cb1;
  background-color: #1a2c38 !important
}
</style>