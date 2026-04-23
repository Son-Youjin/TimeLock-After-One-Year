import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLetter } from "../api/letters";

export default function useCreateLetter() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createLetter,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["letters", variables.userId],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
