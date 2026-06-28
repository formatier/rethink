<script setup lang="ts">
const props = defineProps({
    class: {
        type: String,
    },
});
</script>

<template>
    <div
        class="bg-white rounded-xl shadow-md hover:shadow-lg border-gray-100 border transition-shadow"
        :class="props.class"
    >
        <slot></slot>
    </div>
</template>
