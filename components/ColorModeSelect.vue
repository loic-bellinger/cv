<script setup lang="ts">
const colorMode = useColorMode()

const items = computed(() => colorMode.unknown
  ? []
  : [
      {
        label: 'System',
        value: 'system',
        icon: 'i-lucide-monitor'
      },
      {
        label: 'Light',
        value: 'light',
        icon: 'i-lucide-sun'
      },
      {
        label: 'Dark',
        value: 'dark',
        icon: 'i-lucide-moon'
      }
    ])

const icon = computed(() => items.value.find(item => item.value === colorMode.preference)?.icon)
</script>

<template>
  <USelect
    v-model="colorMode.preference"
    aria-haspopup="listbox"
    placeholder="Loading color mode"
    :loading="colorMode.unknown"
    :disabled="colorMode.unknown"
    :items
    value-key="value"
    variant="ghost"
    color="neutral"
    :icon
    :ui="{
      trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-100'
    }"
  />
</template>
