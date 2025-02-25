import SecondaryButton from "../../../../ui/buttons/secondary-button";
import Inputfield from "../../../../ui/inputs/input";
import HomeHeroservice from "../../../../services/home-service/hero";
import RichTextEditor from "../../../../ui/editor/text-editor";

const Hero: React.FC = () => {
    const { form, onsubmit } = HomeHeroservice();

    return (
        <div className="mt-4">
            
            <form onSubmit={form.handleSubmit(onsubmit)} className="flex flex-col gap-6">
                <Inputfield
                    label="Main title"
                    {...form.register("mainTitle")}
                />
                <Inputfield
                    label="Sub title"
                    {...form.register("subTitle")}
                />

                <RichTextEditor
                    label="Description"
                    value={form.watch("description") || ""}
                    onChange={(content) => form.setValue("description", content)}
                />

                <SecondaryButton type="submit" className="w-full">
                    Submit
                </SecondaryButton>
            </form>
        </div>
    );
};

export default Hero;
