<script setup lang="ts">
const props = defineProps({
    strokeAccent: {
        type: String,
        default: '#000'
    }
});
console.log(props.strokeAccent);
</script>

<template>
    <Container2 :swirlStroke="props.strokeAccent" containerClass="flex flex-col items-center justify-center">
        <Header class="text-4xl">
            <slot />
        </Header>
        <article>
            <slot name="content" />
        </article>
    </Container2>
</template>
