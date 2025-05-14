<script setup lang="ts">
import type { EducationEntry } from '~/types/resume'

defineProps<EducationEntry>()
</script>

<template>
  <article>
    <div class="flex flex-wrap justify-between">
      <h3 class="mr-4">
        {{ school }}
      </h3>
      <p class="italic text-gray-100">
        <time :datetime="start">{{ start }}</time> -
        <time :datetime="end ?? `${new Date().toISOString()}`">{{ end ?? 'Present' }}</time>
      </p>
    </div>
    <p>{{ degree }}</p>
  </article>
</template>
