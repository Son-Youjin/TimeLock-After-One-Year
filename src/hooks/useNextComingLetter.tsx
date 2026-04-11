import { useQuery } from "@tanstack/react-query";
import { getNextComingLetter } from "../api/letters";

export default function useNextComingLetter(userId?: string) {
  return useQuery({
    queryKey: ["nextLetters", userId],
    queryFn: async () => {
      if (!userId) return null;
      return getNextComingLetter(userId);
    },
    enabled: !!userId,
  });
}
