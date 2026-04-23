import { useQuery } from "@tanstack/react-query";
import { getNextComingLetter } from "../api/letters";

export default function useNextComingLetter(userId?: string) {
  return useQuery({
    retry: 3,
    queryKey: ["letters", userId, "next"],
    queryFn: async () => {
      if (!userId) return null;
      return getNextComingLetter(userId);
    },
    enabled: !!userId,
  });
}
