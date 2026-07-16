<script setup lang="ts">
const { isAuth, openAuth } = useAuth();
</script>

<template>
    <ul class="flex">
        <slot></slot>
        <li v-if="isAuth"></li>
        <li v-else>
            <button
                class="btn btn-primary btn-sm rounded-full font-space-grotesk"
                @click="openAuth()"
            >
                Sign In
            </button>
        </li>
    </ul>
</template>
