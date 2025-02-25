import { useMutation } from "@tanstack/react-query";
// import { useAxios } from "../../../auth/home_auth";
import axios from "axios";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

interface FileUploadResponse {
  id: number;
  url: string;
  originalName: string;
}

export const UseFileSubmit = () => {
  // const axiosPrivate = useAxios();

  return useMutation<FileUploadResponse[], AxiosError, File[]>({
    mutationFn: async (input: File[]) => {
      const formData = new FormData();

      input.forEach((file) => {
        formData.append(`files`, file);
      });

      const response = await axios.post<FileUploadResponse[]>(
        "/file-upload",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    },
    onError: (error) => {
      const message = (error.response?.data as { message?: string })?.message || error.message;
      toast.error(`File upload failed: ${message}`);
    }

  });
};