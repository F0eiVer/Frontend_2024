<script setup></script>

<template>
  <footer>
    <nav>
      <ul class="menu">
        <li><a href="#">Реализованные проекты</a></li>
        <li><a href="#">Новости</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </nav>

    <ul class="menu">
      <li>
        <img src="../assets/phone_icon.svg" alt="call picture" /><a
          href="tel:+79009009090"
          >+7 (900) 900-90-90</a
        >
      </li>
      <li>
        <img src="../assets/email_icon.svg" alt="mail picture" /><a
          href="mailto:info@gmail.com"
          >info@gmail.com</a
        >
      </li>
      <li>
        <img src="../assets/location_icon.svg" alt="location picture" /><a
          href="#"
          >г. Владивосток ул. <br />
          Выселковая 49, стр. 3</a
        >
      </li>
    </ul>

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
  height: 246px
  justify-content: center
  padding: 32px 88px 32px 88px
  background-color: rgba(37, 71, 65, 1)

.menu
  list-style: none
  align-items: center
  margin: 10px

.menu li
  margin-bottom: 24px

.menu li a
  text-decoration: none
  color: white
  margin: 0px 12px 0px 12px
  font-family: var(--font-text)
  font-weight: 400
  text-align: right

.right
  margin-left: auto
  align-items: center
</style>
