<script setup lang="ts">
import type { EducationEntry } from '~/types/resume'

defineProps<EducationEntry>()
</script>

<template>
  <article>
    <div class="mb-(--space-2xs-xs)">
      <h3 class="mb-0">
        {{ school }}
      </h3>
      <p class="text-sm italic text-dimmed">
        <time :datetime="start">{{ start }}</time> -
        <time :datetime="end ?? `${new Date().toISOString()}`">{{ end ?? 'Present' }}</time>
      </p>
    </div>
    <p>{{ degree }}</p>
  </article>
</template>
