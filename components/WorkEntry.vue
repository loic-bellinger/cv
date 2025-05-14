<script setup lang="ts">
import type { WorkEntry } from '~/types/resume'

defineProps<WorkEntry>()
</script>

<template>
  <article>
    <div class="flex flex-wrap justify-between">
      <h3 class="mr-4">
        {{ company }}
      </h3>
      <p class="italic text-gray-100">
        <time :datetime="start">{{ start }}</time> -
        <time :datetime="end ?? `${new Date().toISOString()}`">{{ end ?? 'Present' }}</time>
      </p>
    </div>
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
    <ul class="list-inside list-disc text-sm py-2">
      <li
        v-for="(highlight, index) in highlights"
        :key="index"
      >
        {{ highlight }}
      </li>
    </ul>
    <UButtonGroup
      as="ul"
      class="space-x-1"
      size="sm"
    >
      <li
        v-for="(badge, index) in badges"
        :key="index"
      >
        <UBadge
          color="neutral"
          variant="subtle"
        >
          {{ badge }}
        </UBadge>
      </li>
    </UButtonGroup>
  </article>
</template>
