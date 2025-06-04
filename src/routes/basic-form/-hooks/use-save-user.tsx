// hooks/useSaveUser.ts

import { useMutation } from "@tanstack/react-query";
import { saveUserData, type UserData } from "../-lib/save-user";

export const useSaveUser = () => {
  return useMutation({
    mutationFn: (data: UserData) => saveUserData(data),
  });
};
