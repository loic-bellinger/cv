<script setup lang="ts">
import type { Education } from '~/types/resume'

defineProps<Education>()
</script>

<template>
  <article>
    <div class="mb-(--space-3xs-2xs)">
      <h3 class="mb-0">
        {{ $rt(school) }}
      </h3>
      <BaseDateRange
        :start
        :end
      />
    </div>
    <p>{{ $rt(degree) }}</p>
  </article>
</template>
