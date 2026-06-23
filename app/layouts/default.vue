<script lang="ts" setup>
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
                pageID: "manage-privacy",
                label: "Manage Privacy",
            },
            {
                icon: "ph:cookie",
                pageID: "manage-cookies",
                label: "Manage Cookies",
            },
            {
                icon: "ph:jar-label",
                pageID: "manage-cookie-jar",
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
                label: "Document",
            },
            {
                icon: "ph:circle-wavy-question",
                pageID: "help",
                label: "Help",
            },
        ],
    },
];
</script>

<template>
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
        </UiSidebar>
        <slot></slot>
    </UiSidebarLayout>
</template>
