export const useMobileSidebar = () => {
  const state = useState("mobileSidebarOpenState", () => true);

  const toggler = () => {
    state.value = !state.value;
  };
  return { state, toggler };
};
