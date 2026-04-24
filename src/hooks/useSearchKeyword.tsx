import { useQuery } from "@tanstack/react-query";
import { searchKeyword } from "../utils/searchKeyword";
import { letterKeys } from "./queryKeys";

export default function useSearchKeyword(keyword: string) {
  return useQuery({
    retry: false,
    queryKey: letterKeys.keyword(keyword),
    queryFn: () => searchKeyword(keyword),
    enabled: keyword.length >= 2,
    gcTime: 1000 * 300,
    staleTime: 1000 * 30,
  });
}
