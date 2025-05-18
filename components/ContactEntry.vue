<script setup lang="ts">
import type { ContactEntry } from '~/types/resume'

defineProps<ContactEntry>()
</script>

<template>
  <li>
    <UTooltip :text="ariaLabel">
      <UButton
        :href
        :icon
        :aria-label="accessibleLabel"
        target="_blank"
        color="neutral"
        variant="outline"
      />
    </UTooltip>
  </li>
</template>
