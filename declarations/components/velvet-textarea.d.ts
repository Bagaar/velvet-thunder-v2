import Component from "@glimmer/component";
interface VelvetTextareaSignature {
    Args: {
        isDisabled?: boolean;
        isInvalid?: boolean;
        onChange?: (value: string, event: Event) => void;
        onInput?: (value: string, event: Event) => void;
        placeholder?: string;
        size?: "sm" | "md" | "lg";
        value?: string;
        variant?: string | "primary";
    };
    Element: HTMLTextAreaElement;
}
export default class VelvetTextarea extends Component<VelvetTextareaSignature> {
    changeHandler: (event: Event) => void;
    inputHandler: (event: Event) => void;
}
export {};
//# sourceMappingURL=velvet-textarea.d.ts.map