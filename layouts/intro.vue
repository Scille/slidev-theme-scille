<script setup lang="ts">
import ParsecWithName from '../src/img/parsec-w-name.svg';

const props = defineProps<{
    frontmatter: Record<string, any>
}>();
</script>

<template>
    <Container1
        swirlStroke="white"
        slideClass="bg-gradient-to-tr from-[#4092FF] to-[#004299] color-white"
        containerClass="flex flex-row justify-between">
        <div class="left">
            <header>
                <h2 class="subtitle">{{ props.frontmatter.subtitle }}</h2>
                <h1 class="title">{{ props.frontmatter.title }}</h1>
            </header>
            <span class="date"><slot name="date" /></span>
        </div>
        <div class="right">
            <ParsecWithName class="logo" />
            <div class="author">{{ props.frontmatter.author }}</div>
        </div>
    </Container1>
</template>

<style scoped>
    .left {
        @apply flex flex-col z-50;

    }

    .left > header {
        @apply my-auto;
    }

    .right {
        @apply flex flex-col justify-between items-end z-50;
    }

    .subtitle {
        @apply text-base font-light;
    }

    .title {
        @apply text-7xl font-bold text-no-wrap;
    }

    .logo {
        width: 6rem;
    }

    .author {
        @apply text-nowrap;
    }

    .date {
        @apply capitalize
    }
</style>
