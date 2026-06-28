<script lang="ts" setup>
definePageMeta({
    pageID: "home",
    layout: "app-shell",
});
</script>

<template>
    <main class="vision-padding-x flex flex-col w-full py-6 gap-12">
        <HomeAnnouncement>
            <HomeAnnouncementTitle> Announcement Title </HomeAnnouncementTitle>
        </HomeAnnouncement>
        <HomeSection>
            <HomeSectionTitle>
                <Icon name="ph:clock-counter-clockwise-bold" />
                <NuxtLink
                    class="flex gap-2 items-center hover:underline hover:gap-3 transition-all"
                    to="/rooms/recent"
                >
                    Recent
                    <Icon name="ph:caret-right" class="size-5" />
                </NuxtLink>
            </HomeSectionTitle>
            <div
                class="[&>.itm-1]:hidden [&>.itm-2]:hidden [&>.itm-3]:hidden md:grid md:grid-cols-2 md:[&>.itm-1]:block xl:grid-cols-3 xl:[&>.itm-2]:block 3xl:grid-cols-4 3xl:[&>.itm-3]:block gap-4"
            >
                <UiCard
                    v-for="(item, idx) in [1, 2, 3, 4]"
                    :class="`itm-${idx}`"
                >
                    <UiCardBanner src="https://picsum.photos/1920/1200">
                        <HomeCardBadgeContainer>
                            <HomeCardBadge> Computer </HomeCardBadge>
                            <HomeCardBadge> Programing </HomeCardBadge>
                        </HomeCardBadgeContainer>
                    </UiCardBanner>
                    <UiCardContainer>
                        <UiCardTitle>
                            <UiCardTitleText> Rethink Zone </UiCardTitleText>
                        </UiCardTitle>
                        <UiCardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </UiCardText>
                    </UiCardContainer>
                    <HomeCardDivider></HomeCardDivider>
                    <HomeCardDescription>
                        <HomeCardDescriptionProfile
                            src="https://lh3.googleusercontent.com/ogw/AF2bZyhP4RiEdqp29ej9T5J7GKwwLnQ3jppq3BozhtWA4G_smqw-=s32-c-mo"
                            userName="gornchan.z"
                        >
                            GornChanZ
                        </HomeCardDescriptionProfile>
                        <HomeCardDescriptionStatus
                            :follower="100"
                            :post="50"
                        ></HomeCardDescriptionStatus>
                    </HomeCardDescription>
                </UiCard>
            </div>
        </HomeSection>
    </main>
</template>
