<script lang="ts" setup>
const { authStatus } = useAuth();

const links = [
    { icon: "ph:house", pageID: "home", label: "Home" },
    { icon: "ph:users-three", pageID: "rooms", label: "Rooms" },
    { icon: "ph:compass", pageID: "explore", label: "Explore" },
    { icon: "ph:bell", pageID: "alerts", label: "Alerts" },
    { icon: "ph:user", pageID: "profile", label: "Profile" },
];

const sections = [
    {
        title: "Privacy",
        links: [
            {
                icon: "ph:shield-plus",
                pageID: "manage",
                label: "Manage Privacy",
            },
            {
                icon: "ph:jar-label",
                pageID: "cookie-jar",
                label: "Manage Cookie Jar",
            },
        ],
    },
    {
        title: "Rethink",
        links: [
            {
                icon: "ph:question-mark",
                pageID: "about",
                label: "About Rethink",
            },
            {
                icon: "ph:code",
                pageID: "developer-portal",
                label: "Developer Portal",
            },
            {
                icon: "ph:book",
                pageID: "document",
                label: "Documents",
            },
            {
                icon: "ph:circle-wavy-question",
                pageID: "help",
                label: "Help",
            },
        ],
    },
    {
        title: "Terms",
        links: [
            {
                icon: "ph:book-open-text",
                pageID: "rule",
                label: "Rules",
            },
            {
                icon: "ph:book-open-text",
                pageID: "privacy-policy",
                label: "Privacy Policy",
            },
            {
                icon: "ph:book-open-text",
                pageID: "terms-of-service",
                label: "Terms of Service",
            },
        ],
    },
];
</script>

<template>
    <div
        class="fixed w-dvw h-dvh bg-re-shadow/50 z-1001"
        v-if="authStatus == 'in-auth'"
    ></div>
    <UiNav>
        <UiNavPrimary>
            <UiNavList> </UiNavList>
        </UiNavPrimary>
        <UiNavSecondary> </UiNavSecondary>
    </UiNav>
    <UiSidebarLayout>
        <UiSidebar>
            <UiSidebarSection>
                <UiSidebarItem
                    v-for="link in links"
                    :icon="link.icon"
                    :pageID="link.pageID"
                >
                    {{ link.label }}
                </UiSidebarItem>
            </UiSidebarSection>
            <UiSidebarSection v-for="section in sections">
                <UiSidebarSectionTitle>
                    {{ section.title }}
                </UiSidebarSectionTitle>
                <UiSidebarItem
                    v-for="link in section.links"
                    :icon="link.icon"
                    :pageID="link.pageID"
                >
                    {{ link.label }}
                </UiSidebarItem>
            </UiSidebarSection>
            <UiSidebarSection>
                <button class="btn-fail btn-md font-space-grotesk rounded-full">
                    Sign Out
                </button>
            </UiSidebarSection>
        </UiSidebar>
        <slot></slot>
    </UiSidebarLayout>
</template>
