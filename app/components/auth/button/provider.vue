<script setup lang="ts">
defineProps({
    icon: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <button class="btn btn-outline btn-lg font-space-grotesk">
        <div class="p-1 bg-white rounded-full flex">
            <Icon :name="icon" class="size-5"></Icon>
        </div>
        <slot></slot>
    </button>
</template>
