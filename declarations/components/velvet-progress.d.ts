import Component from "@glimmer/component";
interface VelvetProgressSignature {
    Args: {
        max?: number;
        min?: number;
        size?: "sm" | "md" | "lg";
        text?: string;
        value?: number;
        variant?: string | "primary";
    };
    Element: HTMLDivElement;
}
export default class VelvetProgress extends Component<VelvetProgressSignature> {
    get lineStyle(): import("@ember/template/-private/handlebars").SafeString;
    get max(): number;
    get min(): number;
    get value(): number;
}
export {};
//# sourceMappingURL=velvet-progress.d.ts.map