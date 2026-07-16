<script setup lang="ts">
const props = defineProps<{
    icon: string;
    provider: "google" | "github" | "slack";
}>();

const { getProviderAuthUrl } = useProviderAuthHook();

const openAuthUrl = () => {
    const authUrl = getProviderAuthUrl(props.provider);
    alert(authUrl);
    window.open(authUrl, "_top");
};
</script>

<template>
    <button
        class="btn btn-outline btn-lg font-space-grotesk"
        @click="openAuthUrl"
    >
        <div class="p-1 bg-white rounded-full flex">
            <Icon :name="icon" class="size-5"></Icon>
        </div>
        <slot></slot>
    </button>
</template>
