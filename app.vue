<script setup></script>

<template>
  <div class="wrapper">
    <AppHeader class="header" />
    <AppMain class="main" />
    <AppFooter class="footer" />
  </div>
</template>

<style lang="sass">
@use './assets/styles/button'
@import 'reset-css'

:root
  --font-title: Montserrat, sans-serif
  --font-text: Open Sans, sans-serif

html, body, #__nuxt, .root
  height: 100%

.wrapper
  display: flex
  flex-direction: column
  height: 100%

.main
  flex: 1 0 auto

.footer
  flex: 0 0 auto
</style>
