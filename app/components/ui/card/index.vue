<script setup lang="ts">
const props = defineProps({
    boostShadowWhileHover: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div
        class="bg-white rounded-xl shadow-md border-gray-100 border transition-shadow"
        :class="{ 'hover:shadow-lg': props.boostShadowWhileHover }"
    >
        <slot></slot>
    </div>
</template>
