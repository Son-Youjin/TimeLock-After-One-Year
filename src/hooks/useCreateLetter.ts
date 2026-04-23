import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLetter } from "../api/letters";

export default function useCreateLetter() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createLetter,
    retry: 3,
    retryDelay: (attempt) => attempt * 1000,

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
