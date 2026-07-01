<script setup lang="ts">
const props = defineProps({
    src: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <NuxtLink
        class="inline-flex items-center gap-2 hover:underline"
        :to="`/profile/${props.userName}`"
    >
        <NuxtImg class="size-8 rounded-full" :src="props.src"> </NuxtImg>
        <p class="font-ibm-plex-mono text-sm">
            <slot></slot>
            <br />
            <span class="text-xs text-gray-600">@{{ props.userName }}</span>
        </p>
    </NuxtLink>
</template>
