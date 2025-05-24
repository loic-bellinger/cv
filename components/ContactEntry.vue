<script setup lang="ts">
import type { ContactEntry } from '~/types/resume'

defineProps<ContactEntry>()
</script>

<template>
  <li>
    <UTooltip :text="$rt(ariaDescribedBy)">
      <UButton
        :href
        :icon
        :aria-label="$rt(ariaLabel)"
        target="_blank"
        color="neutral"
        variant="outline"
      />
    </UTooltip>
  </li>
</template>
