<script setup lang="ts">
const props = defineProps({
    strokeAccent: {
        type: String,
        default: '#000'
    },
    tocMinDepth: {
        type: Number,
        default: 1
    },
    tocMaxDepth: {
        type: Number,
        default: Infinity,
    },
    tocMode: {
        type: String,
        default: 'all'
    }
});
console.log(props.strokeAccent);
</script>

<template>
    <Container2 :swirlStroke="props.strokeAccent" containerClass="flex flex-col items-center justify-center">
        <slot />
        <Toc :minDepth="props.tocMinDepth" :maxDepth="props.tocMaxDepth" :mode="props.tocMode" />
    </Container2>
</template>
