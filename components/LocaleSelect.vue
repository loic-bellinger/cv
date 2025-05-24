<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const items = computed(() => locales.value.map(locale => ({ value: locale.code, label: locale.name, onSelect: () => setLocale(locale.code) })))
</script>

<template>
  <USelect
    v-model="locale"
    :items
    variant="ghost"
    color="neutral"
    :ui="{
      trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-100'
    }"
  />
</template>
