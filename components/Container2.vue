<script setup lang="ts">
import Swirl1 from '../src/img/swirl1.svg';

const props = defineProps<{
    swirlStroke: string;
    containerClass?: string;
    slideClass?: string;
}>();

</script>

<template>
    <div :class="['slidev-layout', 'container1', 'default', props.slideClass]">
        <Swirl1 class="swirl1" />
        <Swirl1 class="swirl2" />
        <article :class="props.containerClass || ''" v-bind="$attrs" style="height: 100%;" >
            <slot />
        </article>
    </div>
</template>

<style scoped>
    .container1 {
        @apply relative overflow-hidden;
    }

    .swirl1 {
        @apply absolute -top-20 -left-20;
        stroke: v-bind(swirlStroke);
    }

    .swirl2 {
        @apply absolute bottom-20 -right-40;
        rotate: 120deg;
        stroke: v-bind(swirlStroke);
    }
</style>
