import { editData } from "@/api/services/EditData";
import { useMutation } from "@tanstack/react-query";

export const useEditData = <T>(url: string) => {
    return useMutation<T, Error, T>({
        mutationFn: (data) => editData<T>(url, data),
    });
};