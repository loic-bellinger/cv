<script setup lang="ts">
import type { Contact } from '~/types/resume'

defineProps<Contact>()
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
