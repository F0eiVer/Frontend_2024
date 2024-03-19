<script setup lang="ts">
import { ToolbarButton, ToolbarRoot } from "radix-vue";
</script>

<template>
  <header>
    <img class="logo" src="~/assets/logo@2x.png" alt="logo picture" />

    <ul class="menu">
      <li><a href="#">Реализованные проекты</a></li>
      <li><a href="#">Новости</a></li>
      <li><a href="#">Контакты</a></li>
    </ul>

    <div class="left">
      <img class="call" src="~/assets/phone_icon.png" alt="call picture" />
      <a class="phone" href="tel:+79009009090">+7 (900) 900-90-90</a>

      <ToolbarRoot class="ToolbarRoot">
        <ToolbarButton class="ToolbarButton">Оставить заявку</ToolbarButton>
      </ToolbarRoot>
    </div>
  </header>
</template>

<style lang="sass">

=button_appearence($back-color: rgba(37, 71, 65, 1), $border, $border-color)
  background-color: $back-color
  border: $border solid $border-color

header
  display: flex
  margin: 24px 88px 24px 88px
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

.left
  margin-left: auto
  display: flex
  align-items: center

.phone
  text-decoration: none
  color: rgba(37, 71, 65, 1)
  margin: 16px 24px 16px 8px
  font-family: var(--font-title)
  font-weight: 400

.ToolbarButton
  padding: 16px 40px  16px 40px
  border-radius: 10px
  color: white
  +button_appearence(rgba(43, 47, 52, 1), 0px, white)
  margin: 10px

.ToolbarButton:focus
  +button_appearence(rgba(37, 71, 65, 1), 2px, rgba(2, 159, 89, 1))
  padding: 14px 38px  14px 38px

.ToolbarButton:hover:active
  +button_appearence(rgba(2, 159, 89, 1), 0px, white)

.ToolbarButton:hover
  +button_appearence(rgba(37, 71, 65, 1), 0px, white)
  padding: 16px 40px  16px 40px

.ToolbarButton:disabled
  +button_appearence(rgba(157, 156, 156, 1), 1px, rgba(157, 156, 156, 1))
</style>
