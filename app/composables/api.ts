export const useApi = () => {
  const url = (path?: string) => {
    if (process.env.NODE_ENV === "development") {
      return `http://localhost:8000${path}`;
    } else {
      return `https://api.rethink.zone${path}`;
    }
  };

  return { url };
};
