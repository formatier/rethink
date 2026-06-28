<script setup lang="ts">
const props = defineProps({
    follower: {
        type: Number,
        required: true,
    },
    post: {
        type: Number,
        required: true,
    },
});
</script>

<template>
    <div class="flex gap-2 items-center text-gray-600">
        <Icon name="ph:users-fill" class="size-4"></Icon>
        <span class="text-xs">{{ props.follower }}</span>
        <Icon name="ph:chat-dots-fill" class="size-4"></Icon>
        <span class="text-xs">{{ props.post }}</span>
    </div>
</template>
