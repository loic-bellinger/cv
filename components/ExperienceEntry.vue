<script setup lang="ts">
import type { ExperienceEntry } from '~/types/resume'

defineProps<ExperienceEntry>()
</script>

<template>
  <article>
    <div class="mb-(--space-3xs-2xs)">
      <h3 class="mb-0">
        {{ company }}
      </h3>
      <p class="text-sm italic text-dimmed">
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
    <ul
      class="flex gap-(--space-3xs-2xs)"
    >
      <li
        v-for="(badge, index) in badges"
        :key="index"
      >
        <UBadge
          color="neutral"
          variant="soft"
        >
          {{ badge }}
        </UBadge>
      </li>
    </ul>
  </article>
</template>
