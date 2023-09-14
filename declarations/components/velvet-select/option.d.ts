import Component from "@glimmer/component";
interface VelvetSelectOptionSignature {
    Args: {
        value: unknown;
        privateOnCreate: (id: string, value: unknown) => void;
        privateOnDestroy: (id: string) => void;
        privateSelected: unknown;
    };
    Blocks: {
        default: [];
    };
    Element: HTMLOptionElement;
}
export default class VelvetSelectOption extends Component<VelvetSelectOptionSignature> {
    uniqueId: string;
    get isSelected(): boolean;
    get valueAsString(): string;
    constructor(owner: unknown, args: VelvetSelectOptionSignature["Args"]);
    willDestroy(): void;
}
export {};
//# sourceMappingURL=option.d.ts.map