<script setup lang="ts">
const { isAuth } = useAuth();
</script>

<template>
    <ul class="flex">
        <slot></slot>
        <li v-if="isAuth"></li>
        <li v-else>
            <NuxtLink
                class="btn btn-primary btn-sm rounded-full font-space-grotesk"
                to="/auth/signin"
            >
                Signin
            </NuxtLink>
        </li>
    </ul>
</template>
