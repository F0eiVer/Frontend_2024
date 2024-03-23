<script setup></script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="sass">

@import 'reset-css'

:root
  --font-title: Montserrat, sans-serif
  --font-text: Open Sans, sans-serif

=button_appearence($back-color: rgba(37, 71, 65, 1), $border, $border-color)
  background-color: $back-color
  border: $border solid $border-color

.ToolbarButton
  padding: 16px 40px  16px 40px
  border-radius: 10px
  color: white
  +button_appearence(rgba(2, 159, 89, 1), 0px, white)
  margin: 10px

.ToolbarButton:hover:active
  +button_appearence(rgba(43, 47, 52, 1), 2px, rgba(2, 159, 89, 1))

.ToolbarButton:hover
  +button_appearence(rgba(43, 47, 52, 1), 0px, white)
  padding: 16px 40px  16px 40px

.ToolbarButton:disabled
  +button_appearence(rgba(157, 156, 156, 1), 1px, rgba(157, 156, 156, 1))
</style>
