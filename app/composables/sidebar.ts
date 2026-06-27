import { debounceTime, delay, of, Subject, switchMap } from "rxjs";

export const useMobileSidebar = () => {
  const saveStateSubject = new Subject<void>();

  const state = useState("mobileSidebarOpenState", () => false);

  onMounted(() => {
    state.value =
      localStorage.getItem("setting.mobileSidebarOpenState") === "true";
  });

  saveStateSubject.pipe(debounceTime(1000)).subscribe((value) => {
    localStorage.setItem(
      "setting.mobileSidebarOpenState",
      state.value.toString(),
    );
    console.log(state.value.toString());
  });

  const toggler = () => {
    state.value = !state.value;
    saveStateSubject.next();
  };

  return { state, toggler };
};
