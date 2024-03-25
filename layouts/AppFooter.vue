<script setup>
import { give_nav } from "../assets/jsmodules/nav";
import { give_contact_info } from "../assets/jsmodules/contact_info";
const nav = give_nav();
const contact_info = give_contact_info();
</script>

<template>
  <footer>
    <div class="list">
      <img src="../assets/white_logo.svg" alt="logo picture" />
      <a class="bottom_link" href="#">© Загдом, 2024</a>
    </div>

    <div class="list">
      <nav>
        <ul class="menu">
          <li v-for="item in nav">
            <a href="item.url">{{ item.label }}</a>
          </li>
        </ul>
      </nav>
      <a class="bottom_link" href="#">Политика конфиденциальности</a>
    </div>

    <div class="list">
      <ul class="menu">
        <li v-for="item in contact_info">
          <a class="contact_info" href="item.url"
            ><img class="icon" :src="item.src" alt="item.alt" />
            <div class="text">{{ item.label }}</div>
          </a>
        </li>
      </ul>

      <a class="bottom_link" href="#">Пользовательское соглашение</a>
    </div>

    <div class="right">
      <ToolbarRoot class="ToolbarRoot">
        <ToolbarButton class="ToolbarButton">Оставить заявку</ToolbarButton>
      </ToolbarRoot>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
footer
  display: flex
  font-size: 16px
  align-items: flex-start
  justify-content: space-between
  height: 246px
  padding: 32px 88px 32px 88px
  background-color: rgba(37, 71, 65, 1)

.list
  height: 100%
  display: flex
  flex-flow: column
  justify-content: space-between
  align-items: flex-start

.menu
  list-style: none
  align-items: center

.menu li
  margin-bottom: 24px

.menu li a
  text-decoration: none
  color: white
  margin: 0px 12px 0px 12px
  font-family: var(--font-text)
  font-weight: 400
  overflow: hidden

.contact_info
  font-family: var(--font-title)
  display: flex
  flex-flow: row
  align-content: center

.icon
  margin: 0px 10px 0px 0px
  padding: 0

.right
  align-items: center

.bottom_link
  text-decoration: none
  color: rgba(255, 255, 255, 0.7)
  font-size: 14px
  font-family: var(--font-text)
  margin: 0px 12px 0px 12px
</style>
