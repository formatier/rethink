<script lang="ts" setup></script>

<template>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
        <NuxtPage :transition="{ name: 'page', mode: 'out-in' }"></NuxtPage>
    </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.1s;
    will-change: opacity;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition:
        opacity 0.1s ease,
        transform 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
