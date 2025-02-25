import JoditReact from "jodit-react";

interface RichTextEditorProps {
    value: string;
    onChange: (content: string) => void;
    name?: string;
    label?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange, name, label }) => {
    return (
        <div>
            {label && <label className="block mb-2 text-sm font-medium ml-1" htmlFor={name}>{label}</label>}
            <JoditReact
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default RichTextEditor;
