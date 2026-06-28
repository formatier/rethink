<script lang="ts" setup>
const { toggler: toggleMobileSidebar } = useMobileSidebar();
</script>

<template>
    <ul class="flex items-center gap-4">
        <li class="lg:hidden">
            <button
                @click="toggleMobileSidebar"
                class="flex items-center cursor-pointer focus:outline-1 outline-gray-200 p-1 focus:shadow-md transition-all rounded-md active:shadow-sm"
            >
                <Icon name="ph:list" class="size-6"></Icon>
            </button>
        </li>
        <NuxtLink to="/" class="h-9 w-27">
            <Icon name="re:logo" class="w-full h-full"></Icon>
        </NuxtLink>
        <slot></slot>
    </ul>
</template>
