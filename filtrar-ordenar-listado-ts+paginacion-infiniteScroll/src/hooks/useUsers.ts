import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchUsers } from "../services/users"
import { type User } from "../types.d"

export const useUsers = () => {
    const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery<{ nextCursor?: number, users: User[] }>(
        {
            queryKey: ["users"],
            queryFn: ({ pageParam = 1 }) => fetchUsers({ pageParam: pageParam as number }),
            getNextPageParam: (lastPage) => lastPage.nextCursor,
            initialPageParam: 1,
            refetchOnWindowFocus: false, // Desactiva el refetch on window focus (llamar a la api para tener los datos mas actualizados si esta en true/ por defecto)
            staleTime: 1000 * 60 * 60, // Tiempo para que los datos sean viejos
        }
    )
    return {
        isLoading,
        isError,
        users: data?.pages?.flatMap(page => page.users) ?? [],
        refetch,
        fetchNextPage,
        hasNextPage
    }
}