<script lang="ts" setup>
const props = defineProps({
    src: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="relative">
        <NuxtImg
            :src="props.src"
            class="aspect-16/10 w-full rounded-t-xl"
        ></NuxtImg>
        <slot></slot>
    </div>
</template>
