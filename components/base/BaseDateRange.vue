<script setup  lang="ts">
const props = defineProps({
  start: {
    type: String,
    required: true
  },
  end: {
    type: String,
    default: null
  },
  dateStyle: {
    type: String,
    default: 'short'
  }
})

const startDate = new Date(props.start)
const endDate = props.end ? new Date(props.end) : new Date()
</script>

<template>
  <p class="text-sm italic text-dimmed">
    <time :datetime="startDate.toISOString()">{{ $d(startDate, dateStyle) }}</time>&nbsp;&ndash;&nbsp;<time :datetime="endDate.toISOString()">{{ end ? $d(endDate, dateStyle) : $t('ui.dates.today') }}</time>
  </p>
</template>
