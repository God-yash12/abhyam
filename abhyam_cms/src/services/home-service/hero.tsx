import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import HomeHeroValidation, { THomeHeroValidation } from "../../validations/home/hero-validation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const HomeHeroservice = () => {
    const form = useForm<THomeHeroValidation>({
        resolver: zodResolver(HomeHeroValidation)
    });

    const mutation = useMutation({
        mutationFn: async (data: THomeHeroValidation) => {
            const response = await axios.post('/home-hero', data)
            return response;
        },
        onSuccess: () => {
            form.reset()
            toast.success("Home Hero section Custiomized")
        },
        onError: () => {
            toast.error("Failed to Customize Home Hero section")
        }
    });

    const onsubmit = (data: THomeHeroValidation) => {
        mutation.mutate(data)
    }

    return { 
        onsubmit,
        form,
    }
}

export default HomeHeroservice;