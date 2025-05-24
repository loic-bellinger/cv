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
          :href="$rt(link.href)"
          :aria-label="$rt(link.ariaLabel)"
        >{{ $rt(title) }}</a>
      </h3>
    </template>

    <p>{{ $rt(description) }}</p>

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
            {{ $rt(tech) }}
          </UBadge>
        </li>
      </ul>
    </template>
  </UCard>
</template>
