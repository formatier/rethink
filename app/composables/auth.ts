const googleClientId =
  "73738428419-pbjhun7ng82fev1rkbght50eosb5vo7g.apps.googleusercontent.com";

export const useAuthHook = () => {
  const getProviderAuthUrl = (provider: "google" | "github") => {
    switch (provider) {
      case "google":
        const authUrl = "https://accounts.google.com/o/oauth2/v2/auth";

        break;
      case "github":
        const githubAuthUrl = "https://github.com/login/oauth/authorize";

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

export const useAuth = () => {
  const isAuth = useState<boolean>("isAuth", () => false);

  const openAuthUrl = (provider: "google" | "github") => {
    const openResl = window.open("/auth/signin");
  };

  return {
    isAuth,
  };
};
