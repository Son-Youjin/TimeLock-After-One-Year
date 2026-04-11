import { useQuery } from "@tanstack/react-query";
import { getLetter } from "../api/letters";

export default function useLetterItem(id: string) {
  return useQuery({
    queryKey: ["letterItem", id],
    queryFn: () => {
      return getLetter(id);
    },
    enabled: !!id,
  });
}
