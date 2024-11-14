<script setup lang="ts">
import CenterHeader from './center-header.vue';
import ParsecOnDevices from '../src/img/parsec-on-device.png';
</script>

<template>
    <CenterHeader stroke-accent="rgba(0, 88, 204, 0.5)">
        <template #default>
            <slot />
        </template>
        <template #content>
            <div class="grid grid-cols-2 items-center">
                <slot name="content" />

                <img :src="ParsecOnDevices" alt="Parsec on device" class="scale-[3] relative" style="right: -3rem"/>
            </div>
        </template>
    </CenterHeader>
</template>
