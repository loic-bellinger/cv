<script setup lang="ts">
import type { ProjectEntry } from '~/types/resume'

defineProps<ProjectEntry>()
</script>

<template>
  <UCard
    as="article"
    variant="outline"
  >
    <template #header>
      <h3 class="mb-0">
        <a
          :href="link.href"
          :aria-label="link.ariaLabel"
        >{{ title }}</a>
      </h3>
    </template>

    <p>{{ description }}</p>

    <template #footer>
      <ul class="flex gap-(--space-3xs-2xs)">
        <li
          v-for="(tech, index) in techStack"
          :key="index"
        >
          <UBadge
            size="xs"
            variant="soft"
          >
            {{ tech }}
          </UBadge>
        </li>
      </ul>
    </template>
  </UCard>
</template>
