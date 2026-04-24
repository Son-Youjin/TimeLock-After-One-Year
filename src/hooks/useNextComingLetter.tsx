import { useQuery } from "@tanstack/react-query";
import { getNextComingLetter } from "../api/letters";
import { letterKeys } from "./queryKeys";

export default function useNextComingLetter(userId?: string) {
  return useQuery({
    retry: 3,
    queryKey: letterKeys.next(userId),
    queryFn: async () => {
      if (!userId) return null;
      return getNextComingLetter(userId);
    },
    enabled: !!userId,
  });
}
