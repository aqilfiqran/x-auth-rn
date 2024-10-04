import { useInfiniteQuery } from "@tanstack/react-query"
import { userKeys } from "./user.keys"
import { userApi } from "./user"
import { OptionsUserList } from "./user.types"

export const useUserList = (options: OptionsUserList) => {
  return useInfiniteQuery({
    queryKey: userKeys.list(options),
    queryFn: ({ queryKey: [{ options }], pageParam }) =>
      userApi.userList({
        query: {
          ...options.query,
          page: pageParam,
        },
      }),
    select: (response) => ({
      ...response,
      pages: response.pages.map((page) => page.data.data).flat(),
    }),
    getNextPageParam: (lastPage) => {
      const { page, total_pages } = lastPage.data

      const nextPage = page + 1
      return nextPage > total_pages ? undefined : nextPage
    },
  })
}
