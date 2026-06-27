<script lang="ts" setup>
const props = defineProps({
    placeholder: String,
});
</script>

<template>
    <input :placeholder="placeholder" class="p-4 bg-white" />
</template>
