import type { PageID } from "~/types/page";

export const usePageID = () => {
  const route = useRoute();
  const pageID = useState<PageID>("pageID", () => null);

  watch(
    () => route.meta.pageID,
    (newPageID) => {
      const currentPageID = newPageID as string | undefined;
      if (!currentPageID) {
        pageID.value = null;
        return;
      }
      try {
        pageID.value = currentPageID as PageID;
      } catch {
        pageID.value = null;
      }
    },
    {
      immediate: true,
    },
  );

  return pageID;
};
