import { useQuery } from "@tanstack/react-query";
import { searchKeyword } from "../utils/searchKeyword";

export default function useSearchKeyword(keyword: string) {
  return useQuery({
    queryKey: ["searchKeyword", keyword],
    queryFn: () => searchKeyword(keyword),
    enabled: keyword.length >= 2,
    gcTime: 1000 * 30,
    staleTime: 1000 * 30,
  });
}
