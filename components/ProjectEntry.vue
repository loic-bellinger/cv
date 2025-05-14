<script setup lang="ts">
import type { ProjectEntry } from '~/types/resume'

defineProps<ProjectEntry>()
</script>

<template>
  <article>
    <h3>
      <a :href="link.href">{{ title }}</a>
    </h3>
    <p>{{ description }}</p>
    <ul
      v-for="(tech, index) in techStack"
      :key="index"
    >
      <li>{{ tech }}</li>
    </ul>
  </article>
</template>
