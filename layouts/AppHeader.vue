<script setup lang="ts">
import { ToolbarButton, ToolbarRoot } from "radix-vue";

import { give_nav } from "../assets/jsmodules/nav";
const nav = give_nav();
</script>

<template>
  <header>
    <img class="logo" src="~/assets/logo.svg" alt="logo picture" />

    <nav>
      <ul class="menu">
        <li v-for="item in nav">
          <a href="item.url">{{ item.label }}</a>
        </li>
      </ul>
    </nav>

    <div class="right">
      <img class="call" src="~/assets/phone_icon.svg" alt="call picture" />
      <a class="phone" href="tel:+79009009090">+7 (900) 900-90-90</a>

      <ToolbarRoot class="ToolbarRoot">
        <ToolbarButton class="ToolbarButton">Оставить заявку</ToolbarButton>
      </ToolbarRoot>
    </div>
  </header>
</template>

<style lang="sass" scoped>

header
  display: flex
  padding: 24px 88px 24px 88px
  font-size: 16px
  align-items: center
  height: 49px

.logo
  width: 160px
  height: 38px
  margin-right: 80px

.call
  height: 16px

.menu
  list-style: none
  align-items: center

.menu li
  display: inline-flex

.menu li a
  text-decoration: none
  color: rgba(102, 102, 102, 1)
  margin: 0px 12px 0px 12px
  font-family: var(--font-text)
  font-weight: 400

.right
  margin-left: auto
  display: flex
  align-items: center

.phone
  text-decoration: none
  color: rgba(37, 71, 65, 1)
  margin: 16px 24px 16px 8px
  font-family: var(--font-title)
  font-weight: 400
</style>
