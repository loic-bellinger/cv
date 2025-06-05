<script setup  lang="ts">
interface Props {
  start: string
  end: string | null
  dateStyle?: string
}

const { start, end, dateStyle = 'short' } = defineProps<Props>()

const startDate = new Date(start)
const endDate = end ? new Date(end) : new Date()
</script>

<template>
  <p class="text-sm italic text-dimmed">
    <time :datetime="startDate.toISOString()">{{ $d(startDate, dateStyle) }}</time>&nbsp;&ndash;&nbsp;<time :datetime="endDate.toISOString()">{{ end ? $d(endDate, dateStyle) : $t('ui.dates.today') }}</time>
  </p>
</template>
