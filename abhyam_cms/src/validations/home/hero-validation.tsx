import { z } from "zod";

const HomeHeroValidation = z.object({
    mainTitle: z.string().nonempty({ message: "Main Title cannot be Empty" }),
    subTitle: z.string().nonempty({ message: "sub Title cannot be Empty" }),
    description: z.string().optional(),
    image: z.number().min(1, { message: "Atleast one Image is Required" })
})

export default HomeHeroValidation;

export type THomeHeroValidation = z.infer<typeof HomeHeroValidation>