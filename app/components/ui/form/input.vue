<script lang="ts" setup>
const props = defineProps({
    placeholder: String,
    type: String,
    nullable: Boolean,
});

const slot = useSlots();

const disabled = ref(false);
const value = ref("");

watch(disabled, (newValue) => {
    if (newValue) {
        value.value = "";
    }
});
</script>

<template>
    <label class="flex flex-col gap-2">
        <span class="ml-1 text-slate-500 leading-none" v-if="slot.default">
            <input type="checkbox" v-if="props.nullable" v-model="disabled" />
            <slot></slot>
        </span>
        <input
            :placeholder="placeholder"
            :type="props.type"
            :disabled="disabled"
            v-model="value"
            class="px-4 py-2 bg-white rounded-full font-space-grotesk clickable placeholder:text-slate-500 disabled:opacity-50"
        />
    </label>
</template>
