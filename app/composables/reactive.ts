export const useReactiveValue = <T, V>(
  value: T,
  updater: (value: T) => V,
  interval?: number,
) => {
  const reactiveValue = ref(updater(value));

  setInterval(() => {
    reactiveValue.value = updater(value);
  }, interval || 500);

  return reactiveValue;
};
