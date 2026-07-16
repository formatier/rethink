<script lang="ts" setup>
const route = useRoute();

const { provider } = route.params;
const { error, code } = route.query;

onMounted(() => {});
</script>

<template>
    <div class="flex flex-col items-center">
        <h1>Error</h1>
        <UiCard>
            <UiCardContainer>
                <UiCardTitle>
                    <UiCardTitleText> Error </UiCardTitleText>
                </UiCardTitle>
                <UiCardText>
                    {{ error || code }}
                </UiCardText>
            </UiCardContainer>
        </UiCard>
    </div>
</template>
