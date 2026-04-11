import { useQuery } from "@tanstack/react-query";
import { getLettersByUser } from "../api/letters";

function useLetters(userId: string) {
  return useQuery({
    queryKey: ["letters", userId],
    queryFn: () => {
      if (userId) {
        return getLettersByUser(userId);
      }
    },
    enabled: !!userId,
  });
}

export default useLetters;
