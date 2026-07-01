<template>
    <div class="flex items-center justify-center flex-col py-8 px-4 gap-8">
        <h1 class="text-3xl font-bold font-space-grotesk">
            Sign in to Rethink
        </h1>
        <UiCard class="py-2">
            <UiCardContainer class="py-6">
                <UiForm>
                    <UiFormGroup>
                        <UiFormInput
                            placeholder="Email or Username"
                            type="email"
                        >
                            email or username
                        </UiFormInput>
                        <UiFormInput placeholder="Password" type="password">
                            password
                        </UiFormInput>
                    </UiFormGroup>

                    <button class="btn btn-outline btn-lg font-space-grotesk">
                        Continue
                    </button>
                </UiForm>
            </UiCardContainer>
            <HomeCardDivider></HomeCardDivider>
            <UiCardContainer class="py-6">
                <div class="flex flex-col gap-4">
                    <AuthButtonProvider icon="devicon:google">
                        Continue with Google
                    </AuthButtonProvider>
                    <AuthButtonProvider icon="devicon:github">
                        Continue with GitHub
                    </AuthButtonProvider>
                    <AuthButtonProvider icon="devicon:slack">
                        Continue with Slack
                    </AuthButtonProvider>
                </div>
            </UiCardContainer>
        </UiCard>
        <p
            class="max-w-lg font-ibm-plex-mono text-center text-slate-500 text-sm"
        >
            By creating an account, you agree to the
            <NuxtLink to="/terms" class="underline">Terms of Service</NuxtLink>.
            For more information about Rethink's privacy, see the
            <NuxtLink to="/privacy" class="underline"
                >Rethink Privacy Statement</NuxtLink
            >.
        </p>
    </div>
</template>
