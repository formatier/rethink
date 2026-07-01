<script lang="ts" setup>
const props = defineProps({
    placeholder: String,
    type: String,
});

const slot = useSlots();
</script>

<template>
    <label class="flex flex-col gap-2">
        <span class="ml-1 text-slate-500 leading-none" v-if="slot.default">
            <slot></slot>
        </span>
        <input
            :placeholder="placeholder"
            :type="props.type"
            class="px-4 py-2 bg-white rounded-full font-space-grotesk clickable placeholder:text-slate-500"
        />
    </label>
</template>
