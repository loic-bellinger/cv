<script setup lang="ts">
import type { ContactEntry } from '~/types/resume'

defineProps<ContactEntry>()
</script>

<template>
  <li>
    <UTooltip :text="ariaDescribedBy">
      <UButton
        :href
        :icon
        :aria-label="ariaLabel"
        target="_blank"
        color="neutral"
        variant="outline"
      />
    </UTooltip>
  </li>
</template>
