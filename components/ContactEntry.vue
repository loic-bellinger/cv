<script setup lang="ts">
import type { ContactEntry } from '~/types/resume'

const props = defineProps<ContactEntry>()

const accessibleLabel = createAccessibleElementLabel(props.label, true)
</script>

<template>
  <li>
    <UButton
      :href
      :icon
      :aria-label="accessibleLabel"
      :title="accessibleLabel"
      target="_blank"
      color="neutral"
      variant="outline"
    />
  </li>
</template>
