import { useNavigation } from "@react-navigation/native"
import { MemoizedDivider } from "app/components/atoms"
import { CardUser, CardUserSkeleton, EmptyState } from "app/components/organism"
import { AppNavScreen } from "app/navigators"
import { useUserList } from "app/services/api/user"
import { size, spacing } from "app/theme"
import { useTheme } from "app/theme/hooks"
import { useCallback, useMemo } from "react"
import { FlatList } from "react-native"
import { RefreshControl } from "react-native-gesture-handler"

export const List = () => {
  const { colors } = useTheme()
  const navigation = useNavigation<AppNavScreen>()

  const {
    data: { pages: data } = {
      pages: [],
    },
    isLoading,
    error,
    refetch,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useUserList({
    query: {
      per_page: 10,
    },
  })

  const renderData = useMemo(() => {
    if (isLoading) return Array.from({ length: 5 }).map((_, index) => ({ id: index.toString() }))
    return data
  }, [data, isLoading])

  const ListEmptyComponent = useCallback(() => {
    const title = error ? "Gagal memuat data" : "Tidak ada data"
    const description = error ? "Terjadi kesalahan saat memuat data" : "Data tidak ditemukan"

    return (
      <EmptyState
        title={title}
        description={description}
        containerProps={{
          height: size.height * 0.5,
        }}
        button={
          error && {
            text: "Coba lagi",
            onPress: () => {
              refetch()
            },
          }
        }
      />
    )
  }, [refetch, error])

  const ItemSeparatorComponent = useCallback(() => {
    return <MemoizedDivider height={1} color={colors.palette.neutral.light} />
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderItem = useCallback(
    ({ item }) => {
      if (isLoading) return <CardUserSkeleton />
      return (
        <CardUser data={item} onPress={() => navigation.navigate("UserDetail", { id: item.id })} />
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading],
  )

  const onEndReached = useCallback(() => {
    if (isFetchingNextPage) return
    if (hasNextPage) fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  return (
    <FlatList
      data={renderData}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
      ItemSeparatorComponent={ItemSeparatorComponent}
      onEndReached={onEndReached}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
      onEndReachedThreshold={0.5}
      // add padding to the bottom of the list
      contentContainerStyle={{ paddingBottom: spacing.hugeSpace }}
    />
  )
}
