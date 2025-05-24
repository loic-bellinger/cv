<script setup lang="ts">
const colorMode = useColorMode()
const { t } = useI18n<{ ui: { colorMode: Record<string, string> } }>()
const items = computed(() => colorMode.unknown
  ? []
  : [
      {
        label: t('ui.colorMode.system'),
        value: 'system',
        icon: 'i-lucide-monitor'
      },
      {
        label: t('ui.colorMode.light'),
        value: 'light',
        icon: 'i-lucide-sun'
      },
      {
        label: t('ui.colorMode.dark'),
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
    :placeholder="t('ui.colorMode.loading')"
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
