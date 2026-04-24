import { useQuery } from "@tanstack/react-query";
import { getLetter } from "../api/letters";
import { letterKeys } from "./queryKeys";

export default function useLetterItem(id: string) {
  return useQuery({
    retry: 3,
    queryKey: letterKeys.detail(id),
    queryFn: () => {
      return getLetter(id);
    },
    enabled: !!id,
  });
}
