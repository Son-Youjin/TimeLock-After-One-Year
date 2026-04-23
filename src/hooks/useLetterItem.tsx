import { useQuery } from "@tanstack/react-query";
import { getLetter } from "../api/letters";

export default function useLetterItem(id: string) {
  return useQuery({
    retry: 3,
    queryKey: ["letter", id],
    queryFn: () => {
      return getLetter(id);
    },
    enabled: !!id,
  });
}
