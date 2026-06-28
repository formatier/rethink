const googleClientId =
  "73738428419-pbjhun7ng82fev1rkbght50eosb5vo7g.apps.googleusercontent.com";

export const useAuthHook = () => {
  const providerAuth = (provider: "google" | "github") => {
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
    providerAuth,
  };
};

export const useAuth = () => {
  const isAuth = useState<boolean>("isAuth", () => false);

  return {
    isAuth,
  };
};
