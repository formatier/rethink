<script lang="ts" setup>
const { state: mobileSidebarOpenState } = useMobileSidebar();
</script>

<template>
    <aside
        class="h-[calc(100dvh-(--spacing(18)))] w-64 top-18 flex flex-col px-5 py-6 border-r border-gray-300 bg-white fixed left-0 gap-6 overflow-y-scroll transition-all ease-in-out z-1000"
        :class="
            mobileSidebarOpenState
                ? 'not-lg:drop-shadow-re-shadow/25 not-lg:drop-shadow-xl'
                : 'not-lg:-translate-x-64'
        "
    >
        <slot></slot>
    </aside>
</template>
