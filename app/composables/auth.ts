export const useAuth = () => {
  const authStatus = useState<"in-auth" | "unauth" | "auth">("unauth");
  const isAuth = useState<boolean>("isAuth", () => false);

  const openAuth = () => {
    const popupWindow = window.open(
      "/auth/signin",
      "_blank",
      "popup width=460,height=640",
    );

    popupWindow?.addEventListener("message", (event) => {
      console.log(event.data);
    });

    authStatus.value = "in-auth";

    const isPopupClosed = useReactiveValue(
      popupWindow,
      (window) => window?.closed,
      250,
    );

    watch(isPopupClosed, (closed) => {
      if (closed) {
        authStatus.value = "unauth";
      }
    });
  };

  return {
    isAuth,
    authStatus,
    openAuth,
  };
};

const googleClientId =
  "73738428419-pbjhun7ng82fev1rkbght50eosb5vo7g.apps.googleusercontent.com";

export const useProviderAuthHook = () => {
  const getProviderAuthUrl = (provider: "google" | "github" | "slack") => {
    const origin = window.location.origin;
    const state = crypto.randomUUID();
    sessionStorage.setItem("oauth_state", state);

    switch (provider) {
      case "google":
        const googleAuthUrl = new URL(
          "https://accounts.google.com/o/oauth2/v2/auth",
        );
        googleAuthUrl.searchParams.append("client_id", googleClientId);
        googleAuthUrl.searchParams.append(
          "redirect_uri",
          origin + "/auth/callback/google",
        );
        googleAuthUrl.searchParams.append("response_type", "code");
        googleAuthUrl.searchParams.append("scope", "openid email profile");
        googleAuthUrl.searchParams.append("state", state);

        return googleAuthUrl.toString();
      case "github":
        const githubAuthUrl = new URL(
          "https://github.com/login/oauth/authorize",
        );

        break;
      default:
        break;
    }
  };

  return {
    getProviderAuthUrl,
  };
};

export const useCredentialsAuthHook = () => {
  const api = useApi();
  const credentialsAuth = async (email: string, password?: string) => {
    const { data, error } = await useFetch(api.url("/auth/credential/status"), {
      method: "get",
      body: { email, password },
      baseURL: api.url(),
    });

    if (error) {
      error.value;
    }
  };

  return {
    credentialsAuth,
  };
};

export const useAuthDataHook = () => {
  if (window.opener) {
    window.postMessage({ name: "Gorn" });
    (window.opener as Window).addEventListener("click", (event) => {
      console.log("Parrent clicked");
    });
    console.log(window.opener);
  }
};
