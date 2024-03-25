<script setup></script>

<template>
  <footer>
    <div class="list">
      <img src="../assets/white_logo.svg" alt="logo picture" />
      <a class="bottom_link" href="#">© Загдом, 2024</a>
    </div>

    <div class="list">
      <nav>
        <ul class="menu">
          <li><a href="#">Реализованные проекты</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
      <a class="bottom_link" href="#">Политика конфиденциальности</a>
    </div>

    <div class="list">
      <ul class="menu">
        <li>
          <a class="contact_info" href="tel:+79009009090">
            <img
              class="icon"
              src="../assets/phone_icon.svg"
              alt="call picture"
            />
            <div class="text">+7 (900) 900-90-90</div></a
          >
        </li>
        <li>
          <a class="contact_info" href="mailto:info@gmail.com">
            <img
              class="icon"
              src="../assets/email_icon.svg"
              alt="mail picture"
            />
            <div class="text">info@gmail.com</div></a
          >
        </li>
        <li>
          <a class="contact_info" href="#">
            <img
              class="icon"
              src="../assets/location_icon.svg"
              alt="location picture"
            />
            <div class="text">
              г. Владивосток <br />
              ул. Выселковая 49, стр. 3
            </div></a
          >
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
