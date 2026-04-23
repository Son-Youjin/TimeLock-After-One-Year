import { useQuery } from "@tanstack/react-query";
import { getLettersByUser } from "../api/letters";

function useLetters(userId: string) {
  return useQuery({
    retry: 3,
    queryKey: ["letters", userId],
    queryFn: () => {
      if (userId) {
        console.count("letters fetch");
        return getLettersByUser(userId);
      }
    },
    enabled: !!userId,
  });
}

export default useLetters;
