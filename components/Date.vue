<script setup lang="ts">
defineProps<{
    date: Date
    locale: string
}>();
</script>

<template>
    {{  date.toLocaleDateString(locale, {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
    }) }}
</template>
