const googleClientId =
  "73738428419-pbjhun7ng82fev1rkbght50eosb5vo7g.apps.googleusercontent.com";

export const useAuth = () => {
  const providerAuth = (provider: "google") => {
    switch (provider) {
      case "google":
        const authUrl = "https://accounts.google.com/o/oauth2/v2/auth";

        break;
      default:
        break;
    }
  };
};
