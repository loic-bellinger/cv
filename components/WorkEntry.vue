<script setup lang="ts">
import type { WorkEntry } from '~/types/resume'

defineProps<WorkEntry>()
</script>

<template>
  <article>
    <div class="mb-(--space-3xs-2xs)">
      <h3 class="mb-0">
        {{ $rt(company) }}
      </h3>
      <BaseDateRange
        :start
        :end
      />
    </div>
    <h4>{{ $rt(title) }}</h4>
    <p>{{ $rt(description) }}</p>
    <ul class="list-inside list-disc text-sm py-2">
      <li
        v-for="(highlight, index) in highlights"
        :key="index"
      >
        {{ $rt(highlight) }}
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
          {{ $rt(badge) }}
        </UBadge>
      </li>
    </ul>
  </article>
</template>
