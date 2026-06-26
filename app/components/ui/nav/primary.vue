<script lang="ts" setup>
const { state: mobileSidebarOpenState, toggler: toggleMobileSidebar } =
    useMobileSidebar();
</script>

<template>
    <ul class="flex items-center gap-4">
        <li class="lg:hidden">
            <button @click="toggleMobileSidebar" class="flex items-center">
                <Icon name="ph:list" class="size-6"></Icon>
            </button>
        </li>
        <li>
            <NuxtLink to="/">
                <span
                    class="font-lora text-3xl font-bold text-re-primary-alt select-none"
                    >Rethink</span
                >
            </NuxtLink>
        </li>
        <slot></slot>
    </ul>
</template>
