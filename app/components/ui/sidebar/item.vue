<script lang="ts" setup>
const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    pageID: {
        type: String,
        required: true,
    },
});

const isActive = computed(() => {
    const pageID = usePageID();
    return props.pageID === pageID.value;
});
</script>

<template>
    <NuxtLink
        class="isolate hover:z-10 flex py-2 px-4 gap-4 items-center text-black rounded-full select-none"
        :class="isActive ? 'bg-re-primary' : 'hover:bg-gray-200'"
        :to="`/${props.pageID}`"
    >
        <Icon :name="props.icon" class="size-6"></Icon>
        <span class="font-space-grotesk text-md">
            <slot></slot>
        </span>
    </NuxtLink>
</template>
