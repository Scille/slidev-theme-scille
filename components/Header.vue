<template>
    <header class="title">
        <slot />
    </header>
</template>

<style>
    header.title {
        @apply font-bold;
        background: linear-gradient(45deg, #4092FF, #0058CC);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    header.title * {
        line-height: inherit;
        font-size: inherit;
        font-weight: inherit;
    }
</style>
